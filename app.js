
//Elements 
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


//Buttons
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset')

let interval ;


let mils ='0';
let sec = '0';
let min = '0';


// Start button

start.addEventListener('click', e =>{
    
  function start(){
 
    seconds.textContent = "0" + sec  ;
    minutes.textContent = "0" + min + ' :';
    
    if(sec > 9){
      seconds.textContent =  sec ;
    }
    

    if(sec > 59){
      return [ sec = 00 , min++]
    }

    return  sec ++;
    
  }
  interval = setInterval(start ,1000);
  
});


//Pause button

pause.addEventListener('click', e =>{
   clearInterval(interval);
});

//Reset button

reset.addEventListener('click', e =>{

  clearInterval(interval)
 
  seconds.textContent = "00 "  ;
  minutes.textContent =  "00 :";
  
  return [ sec = 0 , min = 0]
 
})






//ANIMATION
anime({
  targets: 'div .start',
  translateY: [
   
    {value: 300 , duration: 1700},
    {value: 0 , duration: 1600},
], 
  
});
anime({

targets: 'div .pause',
  translateY: [
   
    {value: 300 , duration: 1800},
    {value: 0 , duration: 1900},
], 

  
});

anime({

  targets: 'div .reset',
    translateY: [
     
      {value: 300 , duration: 1900},
      {value: 0 , duration: 2000},
  ], 
  
    
  });