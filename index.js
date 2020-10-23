const backcardIamges = [
    // {
    //     dataName : 'black-panther',
    //     imgsrc :  '/img/black-panther.png'
    // },
    // {
    //     dataName: 'black-widow',
    //     imgsrc :  '/img/black-widow.png'
    // },
    // {
    //     dataName : "captain-america",
    //     imgsrc :  '/img/captain-america.png'
    // },
    // {
    //     dataName : "captain-marvel",
    //     imgsrc :  '/img/captain-marvel.png'
    // },
    // {
    //     dataName : "docter",
    //     imgsrc :  '/img/docter.png'
    // },
    // {
    //     dataName : "hulk",
    //     imgsrc :  '/img/hulk.png'
    // },
    // {
    //     dataName : "ironman",
    //     imgsrc :  '/img/ironman.png'
    // },
    // {
    //     dataName : "thenos",
    //     imgsrc :  '/img/thenos.png'
    // },
    {
        dataName : "thor",
        imgsrc :  '/img/thor.png'
    },
    {
        dataName : "witch",
        imgsrc :  '/img/witch.png'
    },
    // {
    //     dataName : 'black-panther',
    //     imgsrc :  '/img/black-panther.png'
    // },
    // {
    //     dataName: 'black-widow',
    //     imgsrc :  '/img/black-widow.png'
    // },
    // {
    //     dataName : "captain-america",
    //     imgsrc :  '/img/captain-america.png'
    // },
    // {
    //     dataName : "captain-marvel",
    //     imgsrc :  '/img/captain-marvel.png'
    // },
    // {
    //     dataName : "docter",
    //     imgsrc :  '/img/docter.png'
    // },
    // {
    //     dataName : "hulk",
    //     imgsrc :  '/img/hulk.png'
    // },
    // {
    //     dataName : "ironman",
    //     imgsrc :  '/img/ironman.png'
    // },
    // {
    //     dataName : "thenos",
    //     imgsrc :  '/img/thenos.png'
    // },
    {
        dataName : "thor",
        imgsrc :  '/img/thor.png'
    },
    {
        dataName : "witch",
        imgsrc :  '/img/witch.png'
    },   

]



let temp;
let score = 0;
let numberOfAttempt = 0;
let counter = 0;
let winningMessage;
let checkWin = 0;

const container = document.querySelector('.container');
const playGame = document.querySelector('.playGame');
const resetGame = document.querySelector('.resetGame');
resetGame.addEventListener('click',restartGame)
playGame.addEventListener('click',showContainer)

function showContainer(){   

        document.querySelector('.score').innerHTML = 0
        document.querySelector('.attempt').innerHTML = 0
      
        playGame.remove()

        const randomCardArray = backcardIamges.sort(()=> Math.random() -.5);
        
        randomCardArray.forEach((backcardIamge,index) => {
            const card = document.createElement('div');
            const frontCard = document.createElement('div');
            const backCrad = document.createElement('div');

            card.setAttribute('class','card')
            frontCard.setAttribute('class','front-card');
            backCrad.setAttribute('class','back-card');
            
            container.appendChild(card);
            card.appendChild(frontCard);
            card.appendChild(backCrad);

            const frontImage = document.createElement('img');
            const backImage = document.createElement('img')

            frontImage.setAttribute('class',`fornt-card__image ${backcardIamge.dataName}`);
            frontImage.setAttribute('id',index)
            frontImage.setAttribute('src','./img/front-image.png');
            frontImage.setAttribute('data-name',`${backcardIamge.dataName}`)
            frontImage.addEventListener('click',flipCard);

            backImage.setAttribute('class',`back-card__image ${backcardIamge.dataName}`);
            backImage.setAttribute('src',`${backcardIamge.imgsrc}`)

            frontCard.appendChild(frontImage);
            backCrad.appendChild(backImage);
        })
}
 
function flipCard(){ 
    this.classList.add('rotate');
    if( temp === undefined){
        temp = this;
    }
   else{
       numberOfAttempt += 1;
       counter +=1;
        document.querySelector('.attempt').innerHTML = numberOfAttempt;
       if(temp.className === this.className){
          
           updateScore(counter);
           document.querySelector('.message').innerHTML = 'Yeah... Card Matched !'
           
           setTimeout(()=>{
            document.querySelector('.message').innerHTML = 'Yeah... Go ahead !'
            checkForWin();
           },300)
          
           temp = undefined;
       }
       else {
          setTimeout(()=>{
            temp.classList.remove('rotate');
            this.classList.remove('rotate');
            temp = undefined;
          }, 800)
          document.querySelector('.message').innerHTML = 'Sorry!. Card Not Matched';
          setTimeout(()=>{
            document.querySelector('.message').innerHTML = 'Sorry!. Try Again';
          },300)
          console.log('card Not Matched !');
         
       }
   }
}




function restartGame() {
    document.querySelector('.attempt').innerHTML = 0
    document.querySelector('.score').innerHTML = 0
    score = 0
    numberOfAttempt = 0
    counter = 0 
    checkWin = 0
     removeAllChildNode();
     showContainer();
}


function updateScore(counter){
    switch(counter){
        case 1:
            score += 20;
            counter = 0
            document.querySelector('.score').innerHTML = score;
            break; 
         case 2:
               score += 15
               counter = 0
               document.querySelector('.score').innerHTML = score;
               break;
        case 3:
               score += 10
               counter = 0
               document.querySelector('.score').innerHTML = score;
               break;
        case 4:
               score += 5
               counter = 0
               document.querySelector('.score').innerHTML = score;
               break; 
        case 5:
            score += 1
            counter = 0
            document.querySelector('.score').innerHTML = score;
            break;
        default :
            score += 1;
            counter = 0;
            document.querySelector('.score').innerHTML = score;           
       }
}

function checkForWin(){
    checkWin+=1 ;
    console.log('Not win')
    if(checkWin === backcardIamges.length/2){
        console.log('win')
        removeAllChildNode();
     
        document.querySelector('.message').innerHTML = 'You win !'
        document.querySelector('.score').innerHTML = score
    }
}

function removeAllChildNode(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
