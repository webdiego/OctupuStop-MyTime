
//Elements 
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');

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
    milliseconds.textContent = mils  ;
    seconds.textContent = "0" + sec + ' :' ;
    minutes.textContent = "0" + min + ' :';
    
    if(sec > 9){
      seconds.textContent =  sec + ' :' ;
    }
    
    if(mils > 60){

      return  [mils = 00, sec++ ]
      
    }

    if(sec > 60){
      return [ sec = 00 , min++]
    }

    return  mils ++;
    
  }
  interval = setInterval(start ,10);
  
});


//Pause button

pause.addEventListener('click', e =>{
   clearInterval(interval);
});

//Reset button

reset.addEventListener('click', e =>{

  clearInterval(interval)
  milliseconds.textContent = "00" ;
  seconds.textContent = "00 :"  ;
  minutes.textContent =  "00 :";
  
  return [ sec = 0 , min = 0, mils=0]
 
})







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