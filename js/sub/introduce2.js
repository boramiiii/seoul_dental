const slide = document.querySelector(".slideWrap");
const panel = slide.querySelector(".panel");
const article = panel.querySelectorAll("article");
const prev = document.querySelector(".btnWrap .prev");
const next = document.querySelector(".btnWrap .next");
const speed = 300; 
const len = article.length; 
let enableClick = true;

const numbers = document.querySelector(".num span");
const bar = document.querySelector(".bar")
let num = numbers.innerHTML;
let num2 = 1;
let barWidth = '';
let windowTablet = '';


init();


window.onresize = function(){
    document.location.reload();
  };

next.addEventListener("click", e=>{
    e.preventDefault(); 

    if(enableClick){
        enableClick = false; 
        nextSlide();
    }

    parseInt(num);
    console.log(num);

    num2 = num2 + 1;
    barWidth = bar.offsetWidth;
    console.log(barWidth);

    barWidth = barWidth / (num2 - 1);
    console.log(barWidth);
    
    if(num2 === 13){
        num2 = 1;
        console.log("탓따");
        console.log(num2);
        numbers.innerHTML = 1;
        bar.style.width = barWidth;
    }

    bar.style.width = (barWidth*num2)+'px';
    numbers.innerHTML = num2;
}); 

prev.addEventListener("click", e=>{
    e.preventDefault(); 
    if(enableClick){
        enableClick = false; 
        prevSlide(); 
    }

    parseInt(num);
    console.log(num);

    num2 = num2 - 1

    barWidth = bar.offsetWidth;
    console.log(barWidth);

    barWidth = barWidth / (num2 + 1);
    console.log(barWidth);
    
    if(num2 === 0){
        num2 = 12;
        console.log("탓따");
        console.log(num2);
        numbers.innerHTML = 12;
        bar.style.width = (barWidth*12)+'px';
    }

    bar.style.width = (barWidth*num2)+'px';
    numbers.innerHTML = num2;
}); 

let articleWidth = article.offsetWidth / len;



function nextSlide(){
    console.log("nextSlide");
    if(matchMedia("screen and (max-width: 1200px)").matches){
        console.log("탓따111111")
        new Anime(panel, {
            prop:"left", 
            value: "-200%", 
            duration: 400, 
            callback:()=>{
                panel.append(panel.firstElementChild); 
                panel.style.left = "-100%"; 
                enableClick = true; 
            }
        })
    }else{
        new Anime(panel, {
            prop:"left", 
            value: "-92%", 
            duration: 400, 
            callback:()=>{
                panel.append(panel.firstElementChild); 
                panel.style.left = "-46%"; 
                enableClick = true; 
            }
        })
    } 
    
    
}

function prevSlide(){
    if(matchMedia("screen and (max-width: 1200px)").matches){
        console.log("탓따111111");
        new Anime(panel, {
            prop:"left", 
            value:"0%", 
            duration:400, 
            callback:()=>{
                panel.prepend(panel.lastElementChild);
                panel.style.left = "-100%"; 
                enableClick = true; 
            }
        })
    }else{
        console.log("탓따 2222222");
        new Anime(panel, {
            prop:"left", 
            value:"0%", 
            duration:400, 
            callback:()=>{
                panel.prepend(panel.lastElementChild);
                panel.style.left = "-46%"; 
                enableClick = true; 
            }
        })
    }


    
}

function init(){
    windowTablet = window.matchMedia("screen and (max-width:1200px)");

    if(matchMedia("screen and (max-width: 1200px)").matches){
        panel.style.left = "-100%";  
    }else{
        panel.style.left = "-46%";  
    }

      
    // panel.style.width = `${40 * len}%`; 
    panel.prepend(panel.lastElementChild);
    // lis.forEach((article)=>article.style.width = `${100 / len}%`)
}