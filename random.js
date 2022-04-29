function random (id,max){
    var cpt = 0 ;
    var speed = 0.5

    document.getElementById(id).innerHTML = cpt;
    
    let timer = setInterval(()=> {
        if(cpt < max){
            speed+=0.05;
            cpt+=speed;
            document.getElementById(id).innerHTML = Math.floor(cpt);
            console.log(cpt);
        }
        else{
            clearInterval(timer);
        }
    
    } ,50) ;
    
}

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

random("about-counters__first-h3",20);
random("about-counters__second-h3",80);
random("about-counters__third-h3",199);
