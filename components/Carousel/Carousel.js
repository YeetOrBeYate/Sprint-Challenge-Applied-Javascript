/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function makeCarosel(){
  const caroselHolder = document.createElement('div'),
  img = document.createElement('img'),
  imgTwo = document.createElement('img'),
  imgThree = document.createElement('img'),
  imgFour = document.createElement('img');
  
  //adding classes
  caroselHolder.classList.add('carousel');

  //adding content
  
  img.src = "./assets/carousel/mountains.jpeg";
  imgTwo.src = "./assets/carousel/computer.jpeg";
  imgThree.src = "./assets/carousel/trees.jpeg";
  imgFour.src = "./assets/carousel/turntable.jpeg";

  //appending
  caroselHolder.appendChild(img);
  caroselHolder.appendChild(imgTwo);
  caroselHolder.appendChild(imgThree);
  caroselHolder.appendChild(imgFour);
  



  return caroselHolder;
}

let yeet = makeCarosel();
console.log(yeet);

let spot = document.querySelector('.carousel-container');
spot.appendChild(yeet);

const imgs = document.querySelectorAll('.carousel img');
console.log(imgs);

// var pic = 0;
// var yate = false;
// setInterval(() => {

//   if(imgs[3].classList.contains('show')){
//     imgs[3].classList.toggle('show');
//   }
//   if(yate){
//     imgs[pic-1].classList.toggle('show');
//     console.log("this is toggling: ", pic-1);
//   }
// imgs[pic].classList.toggle('show')
// console.log("showing pic", pic);
// pic +=1;
// yate = true; 

// if(pic > 3){
//   pic = 0;
//   yate = false;
// }

// },1000);

var pic = 0;
var yate = false;
var hold = false;
imgs[0].classList.toggle('show');
setInterval(()=>{
  
if(!yate){
  pic +=1;
console.log(pic);
  imgs[pic-1].classList.toggle('show');
  imgs[pic].classList.toggle('show');

  if(pic == 3 ){
    yate = true;
    hold = false;
  }
  
}
if(yate){
  setTimeout(()=>{
    hold = true;
  },50)
}

if(yate && hold){
  imgs[imgs.length-1].classList.toggle('show');
  pic = 0;
  console.log("from treu");
  imgs[pic].classList.toggle('show');
  yate = false;
  
}
},2000);
 







