const header = document.querySelector(".header");
const headerHeight= header.getBoundingClientRect().height; //현재 높이 알기
console.log(headerHeight);

document.addEventListener("scroll", ()=>{
    if(window.scrollY> headerHeight/2){
        header.style.backgroundColor = "black";
    }
    else{
        header.style.backgroundColor = "transparent";
    }
});
//documnet를 불러와야 필요한 함수 사용가능

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height; //현재 높이 알기
console.log(headerHeight);
document.addEventListener("scroll", ()=>{
    home.style.opacity = 1-window.scrollY / homeHeight;

});


const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", ()=>{
    if (window.scrollY > homeHeight/2) {
        arrowUp.style.opacity = 0;
    } else {
        arrowUp.style.opacity = 1;
    }

});


