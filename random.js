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

random("about-counters__first-h3",20);
random("about-counters__second-h3",80);
random("about-counters__third-h3",199);
