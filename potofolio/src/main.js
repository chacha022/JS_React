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


const hamburgur = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header__menu");

hamburgur.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
});
headerMenu.addEventListener("click", () =>{
    headerMenu.classList.remove("active");
});

const categories = document.querySelector(".categories");
const project = document.querySelectorAll(".project");
console.log(project);

categories.addEventListener("click",(e) => {
    console.log(e.target.dataset.category);
    const filter = e.target.dataset.category;

    project.forEach((v) => {
        if(filter == "all" || filter ==v.dataset.type){
            v.style.display = "block";

        }else{
            v.style.display = "none";
        }
    });

    const selected = document.querySelector(".category--selected");
    e.target.classList.remove("category--selected");
    e.target.classList.add("category--selected");
});



