var hammenuBtn = document.querySelector(".hammenu__btn");

var hammenuList = document.querySelector(".hammenu__list");

var hammenuListItem = document.querySelectorAll(".hammenu__list--item");

var hammenuBtnSpan = document.querySelector(".hammenu__btn--span");


var isOpen="false";

console.log("hello");

hammenuBtn.addEventListener("click",function(){

    if(isOpen == "true")
    {
       closeNav();
    }
    else{
        openNav();      
    }
    
});

function closeNav(){
    hammenuList.classList.remove("open");
    hammenuListItem.forEach( item =>{
        item.classList.remove("open");
    }) ;
    hammenuBtnSpan.classList.remove("open");
    isOpen="false";
}

function openNav(){
    hammenuBtnSpan.classList.add("open");
    hammenuList.classList.add("open");
    hammenuListItem.forEach( item =>{
        item.classList.add("open");
    }) ;
    isOpen="true";
}

var slideIndex = 0;
showSlide(slideIndex);

function plusSlide(n){
    showSlide(slideIndex+n);
}

function showSlide(n){
    var i;
    var dots = document.getElementsByClassName("dot");
    var images = document.getElementsByClassName("floating-img");
    if(n > (slides.length - 1)  ){
        slideIndex = 0;
    }
    else if(n < 0){
        slideIndex = slides.length - 1;
    }
    else{
        slideIndex = n;
    }

    for(i =0; i<slides.length; i++){
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
        images[i].style.display = "none";
    }
  

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
    images[slideIndex].style.display = "block";
    
}
var takeMeTop = document.getElementsByClassName("takeMeTop");
var header = document.getElementsByTagName("header");
takeMeTop[0].style.display = "none";

document.addEventListener("scroll", ()=>{
    if(window.pageYOffset >= 1800){
        takeMeTop[0].style.display = "flex";
    }
    else{
        takeMeTop[0].style.display = "none";
    }
    if(window.pageYOffset >= 100 ){
        header[0].style.background = "white";
        header[0].style.boxShadow = "0 4px 6px 0 rgba(0,0,0,0.2)"
    }
    else{
        header[0].style.background = "none";
        header[0].style.boxShadow = "none"
    }
});

function scrollToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}