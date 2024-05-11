let body = document.querySelector('body');
let heroImg = document.querySelector('.hero img');
let hill1 = document.querySelectorAll('.hill1 img');
let hill2 = document.querySelectorAll('.hill2 img');
let hill3 = document.querySelectorAll('.hill3 img');
let building1 = document.querySelectorAll('.building1 img');
let building2 = document.querySelectorAll('.building2 img');
let scrolltag = document.querySelector('.scrolltag');
let intro = document.querySelector('.intro');
let introh = document.querySelector('.intro h1');
let introp = document.querySelector('.intro p');






document.addEventListener("scroll", function(){
    console.log(window.scrollY);
    let move = window.scrollY;


    const viewportMid = window.innerHeight/2;
    const introTop = intro.getBoundingClientRect().top; 
    const introMid = introTop + intro.getBoundingClientRect().height/2;
    
    const distance = viewportMid - introMid;

    if(Math.abs(distance)<200){
        console.log("close")
        introh.style.color = `#00B869`
        introh.style.fontSize  = `52px`
        introh.style.transition = `all 0.3s ease-out`;

        introp.style.fontSize  = `20px`
        introp.style.color = `#00B869`
        introp.style.transition = `all 0.3s ease-out`;

    }else{
        console.log("far")
        introh.style.color = `#003329`
        introh.style.fontSize  = `42px`
        introh.style.transition = `all 0.3s ease-out`;

        introp.style.fontSize  = `18px`
        introp.style.color = `#003329`
        introp.style.transition = `all 0.3s ease-out`;


    }


    if(move>5){
    scrolltag.style.opacity = `0`;
    scrolltag.style.transition = `opacity 0.5s ease-in`;
}

    hill1.forEach(function(hill1) {
        hill1.style.transform = `translateX(-${move/10}%)`;
       
       
    });
    hill2.forEach(function(hill2) {
        hill2.style.transform = `translateX(${move/10}%)`;
       
  
    });
    hill3.forEach(function(hill3) {
       
        if(move > 2000) {
            hill3.style.opacity = `0`;
            hill3.style.transition = `opacity 0.5s ease-in`;
        } else {
            hill3.style.opacity = `1`;
            hill3.style.transition = `opacity 0.5s ease-in`;
        }
    });
    


    building1.forEach(function(building1) {
        building1.style.transform = `translateY(${100 - move/20}%)`;
        
        if(move > 2000) {
            building1.style.transform = `translateY(0)`;
            building1.style.opacity = `0`;
            building1.style.transition = `opacity 0.5s ease-in`;
        } else {
            building1.style.opacity = `1`;
            building1.style.transition = `opacity 0.5s ease-in`;
        }
    });

    building2.forEach(function(building2) {
        building2.style.transform = `translateY(${100 - move/20}%)`;
        
        if(move > 2000) {
            building2.style.transform = `translateY(0)`;
            building2.style.opacity = `0`;
            building2.style.transition = `opacity 0.5s ease-in`;
        } else {
            building2.style.opacity = `1`;
            building2.style.transition = `opacity 0.5s ease-in`;
        }
        
    });



});

