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

const medical_subject = document.querySelector("#subject");
const implant = medical_subject.querySelector(".implant_img");
const normal_med = medical_subject.querySelector(".normal_med_img");
const wisdom_tooth = medical_subject.querySelector(".wisdom_tooth_img");

const boxs = medical_subject.querySelector(".articleWrap");
const box1 = boxs.querySelector(".box1");
const box2 = boxs.querySelector(".box2");
const box3 = boxs.querySelector(".box3");

const imgWrap = medical_subject.querySelectorAll(".clk_img");

box1.addEventListener("mouseenter",()=>{
    imgWrap.forEach((img,index)=>{
        img.classList.remove("on");
    });

    implant.classList.add("on");
})
box2.addEventListener("mouseenter",()=>{
    imgWrap.forEach((img,index)=>{
        img.classList.remove("on");
    });

    normal_med.classList.add("on");
})
box3.addEventListener("mouseenter",()=>{
    imgWrap.forEach((img,index)=>{
        img.classList.remove("on");
    });

    wisdom_tooth.classList.add("on");
})

const articles = boxs.querySelectorAll("article");
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");

tab1.addEventListener("click",(e)=>{
    articles.forEach((article,index)=>{
        article.classList.remove("on");
    });

    imgWrap.forEach((img,index)=>{
        img.classList.remove("on");
    });

    box1.classList.add("on");
    implant.classList.add("on");
})
tab2.addEventListener("click",(e)=>{
    articles.forEach((article,index)=>{
        article.classList.remove("on");
    });

    imgWrap.forEach((img,index)=>{
        img.classList.remove("on");
    });

    box2.classList.add("on");
    normal_med.classList.add("on");
})
tab3.addEventListener("click",(e)=>{
    articles.forEach((article,index)=>{
        article.classList.remove("on");
    });

    imgWrap.forEach((img,index)=>{
        img.classList.remove("on");
    });
    box3.classList.add("on");
    wisdom_tooth.classList.add("on");
})


const banner = document.querySelector(".banner"); 
const list = document.querySelector(".partnerWrap"); 
const banner_prev = document.querySelector(".btn_prev"); 
const banner_next = document.querySelector(".btn_next"); 

let num = -300; 
let wid = 300; 
let timer = null; 
let enableClick = true; 

timer = setInterval( move,80);

banner.addEventListener("mouseenter", ()=>{
    clearInterval(timer); 
});

banner.addEventListener("mouseleave", ()=>{
    timer = setInterval(move,80);
}); 

banner_next.addEventListener("click", e=>{
    e.preventDefault(); 
    if(enableClick){
        nextEl();     
        enableClick = false; 
    }
}); 

banner_prev.addEventListener("click", e=>{
    e.preventDefault(); 
    if(enableClick){
        prevEl();
        enableClick = false; 
    }
    
});

const sections = document.querySelectorAll("section");
let posArr = null; 
const base = -400; 
const btnGoTop = document.querySelector(".toTop");

setPos();

//브라우저 스크롤 이벤트 바인딩 
window.addEventListener("scroll", e=>{
    let scroll = window.scrollY||window.pageYOffset; 
    activation(scroll);
});

btnGoTop.addEventListener("click",e=>{
    e.preventDefault();

    moveScroll(0);
})


//모바읾메뉴 나오게
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const mo_bg = document.querySelector(".mo_bg");
const logo = document.querySelector(".logoWrap");


btnCall.onclick = (e)=>{
    e.preventDefault(); 

    btnCall.classList.add('on'); 
    menuMo.classList.add('on'); 
    mo_bg.classList.add("on");
    logo.style.visibility = 'hidden';
    logo.style.opacity = 0;

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
    logo.style.visibility = 'visible';
    logo.style.opacity = 1;
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



// 지도
var mapContainer = document.getElementById('map');   

var mapOption = {
    center: new kakao.maps.LatLng(37.612205, 126.928791), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    draggable:false
};
var map = new kakao.maps.Map(mapContainer, mapOption);
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);
let drag = false; //드래그 가능 
let zoom = true; //확대축소 가능 


var markerPosition  = new kakao.maps.LatLng(37.612205, 126.928791); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

var iwContent = '<div style="padding:20px; text-align:center; font-weight:bold;">서울공감치과</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);


window.addEventListener("resize",()=>{    
    map.setCenter(markerOptions[active_index].latlng);
}); 

//스크롤시 메뉴백그라운드 생기게
const navbar = document.querySelector('#header .inner');
const navbarHeight = navbar.getBoundingClientRect().height;

const quick_menu_m = document.querySelector(".quick_menu2");

document.addEventListener('scroll', () => { 
    // console.log(window.scrollY);
    // console.log(navbarHeight);
    

    if(window.scrollY > navbarHeight){
        navbar.classList.add('on');
        quick_menu_m.classList.add("on");

    } else {
        navbar.classList.remove('on');
        quick_menu_m.classList.remove("on");
    }
});


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


function activation(scroll){
    sections.forEach((section, index)=>{
        if(scroll >= posArr[index] +base){
            // for(const section of sections) section.classList.remove("on"); 
            if(scroll === 0){
                for(const section of sections) section.classList.remove("on"); 
            }
            sections[index].classList.add("on"); 
        }
     })
}

function move(){
    //list의 초기margin-left값 : -240
    //num값이 -480이 되면(list li하나가 앞으로 이동해서 화면에서 사라지면)
    if(num < -wid *2){
        //num값을 -240으로 고정하고 
        num = -wid; 
        //맨앞의 li를 list마지막으로 보냄 
        list.append(list.firstElementChild); 
    }else{
        //num값이초기값 -240에서 -480이 되기 전까지는 2씩 빼줌 
        num-=2; 
    }    
    //num값을 list margin-left에 적용 
    list.style.marginLeft = num +"px"; 
}

function nextEl(){
    new Anime(list,{
        prop:"margin-left", 
        value : -wid * 2, 
        duration: 500, 
        callback:()=>{
            list.append(list.firstElementChild); 
            list.style.marginLeft = -wid +"px"; 
            enableClick = true; 
        }
    })
}

function prevEl(){
    new Anime(list, {
        prop:"margin-left", 
        value : 0, 
        duration: 500, 
        callback:()=>{
            list.prepend(list.lastElementChild); 
            list.style.marginLeft = -wid +"px"; 
            enableClick = true; 
        }
    })
}