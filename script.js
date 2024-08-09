
const button = document.querySelector(".slider");
const next = document.querySelector(".arrow-2");
const prev = document.querySelector(".arrow-1");
const images = document.querySelectorAll(".images");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");

let slidnumber = 1;
const nummber = images.length;
const nextImage = () => {
    button.style.transform = `translateX(-${slidnumber*1000}px)`;
    slidnumber++;
}
const nextImageElse = () => {
    button.style.transform = `translateX(0px)`;
    slidnumber= 1;
}
const previmage = ()=>{
    slidnumber--;
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}
const previmageElse = () => {
    slidnumber = 6;
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}
const dottransform = () => {
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}
function changeButtonColor() {
    // Reset all button colors first
    btn1.style.backgroundColor = '';
    btn2.style.backgroundColor = '';
    btn3.style.backgroundColor = '';
    btn4.style.backgroundColor = '';
    btn5.style.backgroundColor = '';
    btn6.style.backgroundColor = '';
    
    // Apply the background color to the specific button
    if (slidnumber === 1) {
        btn1.style.backgroundColor = 'aqua';
    } else if (slidnumber === 2) {
        btn2.style.backgroundColor = 'aqua';
    } else if (slidnumber === 3) {
        btn3.style.backgroundColor = 'aqua';
    } else if (slidnumber === 4) {
        btn4.style.backgroundColor = 'aqua';
    } else if (slidnumber === 5) {
        btn5.style.backgroundColor = 'aqua';
    } else {
        btn6.style.backgroundColor = 'aqua';
    }
}


next.addEventListener('click',()=>{
    
    ( slidnumber < nummber) ? nextImage() : nextImageElse();
    changeButtonColor();
});

prev.addEventListener('click',()=>{
    
   ( slidnumber > 1) ? previmage() : previmageElse();
   changeButtonColor();
})

const backForOne = () => {
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}
const backForTwo = () => {
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}
const backForThree = () => {
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}
const backForFour = () => {
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}
const backForFive = () => {
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}
const backForSix = () => {
    button.style.transform = `translateX(-${slidnumber*1000 - 1000}px)`;
}

btn1.addEventListener('click' , () => {
    ( slidnumber = 1) ? backForOne() : slidnumber = 1; 
    changeButtonColor(); 
    
});
btn2.addEventListener('click' , () => {
    ( slidnumber = 2) ? backForTwo() : slidnumber = 2;  
    changeButtonColor();
});
btn3.addEventListener('click' , () => {
    ( slidnumber = 3) ? backForThree() : slidnumber = 3; 
    changeButtonColor(); 
});
btn4.addEventListener('click' , () => {
    ( slidnumber = 4) ? backForFour() : slidnumber = 4; 
    changeButtonColor(); 
});
btn5.addEventListener('click' , () => {
    ( slidnumber = 5) ? backForFive() : slidnumber = 5; 
    changeButtonColor(); 
});
btn6.addEventListener('click' , () => {
    ( slidnumber = 6) ? backForSix() : slidnumber = 6;  
    changeButtonColor();
});
if(slidnumber === 1){
    btn1.style.backgroundColor = 'aqua';
    
}else if (slidnumber === 2){
    btn2.style.backgroundColor = 'aqua';
}else if(slidnumber === 3 ){
    btn3.style.backgroundColor = 'aqua';
}else if(slidnumber === 4 ){
    btn4.style.backgroundColor = 'aqua';
}else if(slidnumber === 5){
    btn5.style.backgroundColor = 'aqua';
}else{
    btn6.style.backgroundColor = 'aqua';
}
  

