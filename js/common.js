const btnGoTop = document.querySelector(".toTop");

const sections = document.querySelectorAll("section");
let posArr = null; 


const header = document.querySelector("#header");
const gnb = document.querySelector("#gnb");
const gnb_depth1 = document.querySelectorAll(".menuWeb #gnb .depth1");

const bgSub = header.querySelector(".bgSub");
const dropdown1 = gnb.querySelector(".d1");
const dropdown2 = gnb.querySelector(".d2");
const dropdown3 = gnb.querySelector(".d3");
const dropdown4 = gnb.querySelector(".d4");
const dropdown5 = gnb.querySelector(".d5");

gnb_depth1.forEach((depth1,index)=>{
    depth1.addEventListener("mouseenter",(e)=>{
        e.preventDefault();

        header.classList.add("on");
        bgSub.classList.add("on");

        console.log(index);

        if(index === 0){
            dropdown1.classList.add("on");
        }else if(index === 1){
            dropdown2.classList.add("on");
        }else if(index === 2){
            dropdown3.classList.add("on");
        }else if(index === 3){
            dropdown4.classList.add("on");
        }else if(index === 4){
            dropdown5.classList.add("on");
        }

    });

    depth1.addEventListener("mouseleave",(e)=>{
        e.preventDefault();

        header.classList.remove("on");
        bgSub.classList.remove("on");

        if(index === 0){
            dropdown1.classList.remove("on");
        }else if(index === 1){
            dropdown2.classList.remove("on");
        }else if(index === 2){
            dropdown3.classList.remove("on");
        }else if(index === 3){
            dropdown4.classList.remove("on");
        }else if(index === 4){
            dropdown5.classList.remove("on");
        }
    })
});



setPos();

btnGoTop.addEventListener("click",e=>{
    e.preventDefault();

    moveScroll(0);
})




//모바읾메뉴 나오게
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const mo_bg = document.querySelector(".mo_bg");

btnCall.onclick = (e)=>{
    e.preventDefault(); 

    btnCall.classList.add('on'); 
    menuMo.classList.add('on'); 
    mo_bg.classList.add("on");

    document.body.style.overflow = 'hidden'
}

const mo_close = document.querySelector(".mobile_close_btn");

mo_close.onclick = (e)=>{
    e.preventDefault(); 

    btnCall.classList.remove('on'); 
    menuMo.classList.remove('on'); 
    mo_bg.classList.remove("on");

    document.body.style.overflow = 'auto'
    document.body.style.overflowX= 'hidden';
}

const mo_depth1 = menuMo.querySelectorAll(".depth1");

mo_depth1.forEach(function(depth1, index){
    let dropDowns = depth1.querySelector(".dropdown");

    depth1.addEventListener("click",(e)=>{
        mo_depth1.forEach(function(depth,index){
            depth.classList.remove("on");
            depth.querySelector(".dropdown").classList.remove("on");
        })
        
        depth1.classList.add("on");
        
        dropDowns.classList.add("on");
    })
})


function setPos(){
    posArr =[]; 
    for(const section of sections){
        posArr.push(section.offsetTop)
    }
   // console.log(posArr)
}

function moveScroll(index){
    new Anime(window,{
        prop:"scroll", 
        value: posArr[index], 
        duration:500, 
        callback :()=>{
            enableClick = true; 
        }
    });
}