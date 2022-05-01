//first swiper
const swiper = new Swiper('.swiper.one', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:5,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//second swiper
  var swiper2 = new Swiper(".mySwiper", {
    slidesPerView: 5,
    direction:'horizontal',
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
      },
    loop:true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// numbers generating effect
function random (id,max){
    var cpt = 0 ;
    var speed = 0.5

    document.getElementById(id).innerHTML = cpt;
    
    let timer = setInterval(()=> {
        if(cpt < max){
            speed+=0.05;
            cpt+=speed;
            document.getElementById(id).innerHTML = Math.floor(cpt);
        }
        else{
            clearInterval(timer);
        }
    
    } ,50) ;
    
}
//navigation in the schedule tables
function navTable1(){
    const elem1 =document.querySelector(".schedule-nav__a1").style;
    const elem2 =document.querySelector(".schedule-nav__a2").style;
    const elem3 =document.querySelector(".schedule-nav__a3").style;

        document.getElementById("schedule-day1").classList.add("show");
    document.getElementById("schedule-day2").classList.remove("show");
    document.getElementById("schedule-day3").classList.remove("show");
    console.log(document.querySelector(".schedule-nav__a1"));
    elem1.color="#ffbd00";
    elem2.color="#fff";
    elem3.color="#fff";
}
function navTable2(){
    const elem1 =document.querySelector(".schedule-nav__a1").style;
    const elem2 =document.querySelector(".schedule-nav__a2").style;
    const elem3 =document.querySelector(".schedule-nav__a3").style;

    document.getElementById("schedule-day2").classList.add("show");
    document.getElementById("schedule-day1").classList.remove("show");
    document.getElementById("schedule-day3").classList.remove("show");
   
    elem1.color="#fff";
    elem2.color="#ffbd00";
    elem3.color="#fff";
}
function navTable3(){
    const elem1 =document.querySelector(".schedule-nav__a1").style;
    const elem2 =document.querySelector(".schedule-nav__a2").style;
    const elem3 =document.querySelector(".schedule-nav__a3").style;

    document.getElementById("schedule-day3").classList.add("show");
    document.getElementById("schedule-day1").classList.remove("show");
    document.getElementById("schedule-day2").classList.remove("show");

    elem1.color="#fff";
    elem2.color="#fff";
    elem3.color="#ffbd00";
   
}
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("modalOpener");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal__exit")[0];

var back = document.getElementsByTagName("main")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  back.style.opacity="0.2";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  back.style.opacity="1";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//hamburger navbar 

const hamburger =document.getElementsByClassName("hamburger__button")[0];
const navBody = document.getElementsByClassName("main-nav-elements")[0];
const home = document.getElementById("Home");

var timesClicked = 0 ;
hamburger.onclick = function(){
  if(screen.availWidth<= 1142){
  if(timesClicked%2==0){
  navBody.style.visibility="visible";
  Home.classList.add="homeResp";
  }else{
    navBody.style.visibility="hidden";
    Home.classList.remove="homeResp";
  }
  timesClicked++;
}
}


random("about-counters__first-h3",20);
random("about-counters__second-h3",49);
random("about-counters__third-h3",98);
