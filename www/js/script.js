window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

var loc = ['.landing', '.work', '.about', '.contact'];

//assigning variables with all section positions on resize
window.addEventListener("resize", function(e){
    if(window.innerWidth > 992){
        document.querySelector(".phoneMenu").style.display = "none";
    }
    else{
        document.querySelector(".phoneMenu").style.display = "block";
    }
});

//custom scroll spy
window.document.addEventListener("scroll", function(e){
    var locTop = [];

    for (let i = 0; i < loc.length; i++) {
        document.querySelector(loc[i]).getBoundingClientRect();
        locTop.push(document.querySelector(loc[i]).getBoundingClientRect().top)
    }
    var y = window.scrollY + 50;
    if(locTop[0] <= 0){
        clearAll();
        document.querySelector(".landingLink").classList.add("active");
        document.querySelector(".phoneMenu").style.backgroundColor = "rgb(240, 175, 12)";
        
    }
    if(locTop[1] < 10){
        clearAll();
        document.querySelector(".workLink").classList.add("active");
        document.querySelector(".phoneMenu").style.backgroundColor = "rgb(7, 147, 182)";
    }
    if(locTop[2] < 10){
        clearAll();
        document.querySelector(".aboutLink").classList.add("active");
        document.querySelector(".phoneMenu").style.backgroundColor = "rgb(190, 81, 51)";
    }
    if(locTop[3] < 10){
        clearAll();
        document.querySelector(".contactLink").classList.add("active");
        document.querySelector(".phoneMenu").style.backgroundColor = "rgb(143, 68, 51)";
    }
});

function clearAll(){
    for (let i = 0; i < loc.length; i++) {
        document.querySelector(loc[i]+'Link').style.color = "white";
        document.querySelector(loc[i]+'Link').classList.remove("active")
    }
}


/* Open when someone clicks on the span element */
function openNav() {
    document.querySelector(".phoneMenu").style.zIndex = "0";
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    if(window.innerWidth < 992){
    document.querySelector(".phoneMenu").style.zIndex = "1";
    }
    document.getElementById("myNav").style.width = "0%";
  }