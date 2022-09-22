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
    mo_bg.style.zIndex = 4;
    menuMo.style.zIndex = 12;
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

const btnTop_mo = document.querySelector(".toTop2");

btnTop_mo.addEventListener("click",e=>{
    e.preventDefault();

    moveScroll(0);
})

const btn_lnb_mo = document.querySelector(".lnb_mo .title");
const lnb_mo_list = document.querySelector(".lnb_mo .list");

btn_lnb_mo.addEventListener("click",(e)=>{
    lnb_mo_list.classList.toggle("on");
})



// 지도
var mapContainer = document.getElementById('map2');   

var mapOption = {
    center: new kakao.maps.LatLng(37.612205, 126.928791), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    // draggable:false
};
var map = new kakao.maps.Map(mapContainer, mapOption);
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
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