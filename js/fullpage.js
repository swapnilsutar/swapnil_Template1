const section = document.querySelectorAll('section');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const idlePeriod = 100;
const animationDuration = 1000;
let lastAnimation = 0;

next.addEventListener('click',()=>{
   console.log('next');

   if(index>3) return;

   index++;

   section.forEach((section,i)=>{
      if(i===index){
         section.scrollIntoView({behavior:"smooth"});
      }
   });


});

prev.addEventListener('click',()=>{
   if(index<1) return;

   index--;
   section.forEach((section,i)=>{
      if(i===index){
      section.scrollIntoView({behavior:"smooth"});
      }
   });

});

document.addEventListener('wheel',event =>{
   const delta = event.wheelDelta;
   var timeNow = new Date().getTime();

   if(timeNow - lastAnimation < idlePeriod + animationDuration) {
      event.preventDefault();
      return;
   }

   if(delta<0){
      var event = new Event('click');
      next.dispatchEvent(event);
   }
   else{
      var event = new Event('click');
      prev.dispatchEvent(event);
   }

   lastAnimation = timeNow;

});