//buttons
const prevBtn = document.querySelector(".prev") ;
const nextBtn = document.querySelector(".next");

//divs
const span = document.querySelector("span");
const div = document.querySelectorAll("span div");

//first last
const firstBox = document.querySelector("#firstBox");
const lastBox = document.querySelector("#lastBox");

div[0].style.background = "green";
div[1].style.background = "blue";
div[2].style.background = "orange";
div[3].style.background = "yellow";
div[4].style.background = "grey";
div[5].style.background = "orange";

let counter = 1;
const size = div[0].clientWidth;

span.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if(counter >= div.length -1)return;
  span.style.transition = "transform .5s ease-in-out";
  counter++;
  span.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    span.style.transition = "transform .5s ease-in-out";
  counter--;
  span.style.transform = `translateX(${-size * counter}px)`;
});

span.addEventListener('transitionend', () => {
  if(div[counter].id === 'lastBox'){
    span.style.transition = "none";
    counter =   div.length - 2;
    span.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(div[counter].id === 'firstBox'){
    span.style.transition = "none";
    counter =   div.length - counter;
    span.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

});