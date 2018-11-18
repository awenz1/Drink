
var ounce1;
var ounce2;
var pump1Slide;
var pump2Slide;

//called every time pour is hit for the first drink
function pour1(event){
  // change to pouring screen while pours
}

//called every time pour is hit for the second drink
function pour2(event){
  //change to pouring screen while pours
}

//called whenever the slide for drink 1 is moved
function dSlide1(event){
      ounce1.innerHTML = pump1Slide.value;
    }

//called whenever the slide for drink2 is moved
    function dSlide2(event){
          ounce2.innerHTML = pump2Slide.value;
        }

    function drink1Slide(){
        drink.autoBright(lightLev.innerHTML);
    }

    function drink2Slide(){
        drink.autoBright(lightLev.innerHTML);
    }

document.addEventListener("DOMContentLoaded", function(event) {
    ounce1 = document.getElementById("drink1Amount")
    ounce2 = document.getElementById("drink2Amount")
    pump1Slide = document.getElementById("slideDrink1")
    pump2Slide = document.getElementById("slideDrink2")

    //event handlers
    pump1Slide.addEventListener("change",dSlide1)
    pump2Slide.addEventListener("change",dSlide2)
    .addEventListener("click",)
    .addEventListener("click",)
  }
