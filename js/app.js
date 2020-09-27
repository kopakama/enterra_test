"use strict";

var slider = document.getElementById("myRange");
var output = document.getElementById("resCount");
let resCount = document.querySelector(".resourses__count");
const sliderPlus = document.querySelector(".slider__plus");
const sliderMinus = document.querySelector(".slider__minus");


output.value = parseInt(resCount.innerHTML / 2);
slider.max = resCount.innerHTML;
slider.value = output.value;


slider.oninput = function() {
  output.value = this.value;
};

sliderPlus.onclick = function(e) {
    if(output.value <= (resCount.innerHTML - parseInt(10 * resCount.innerHTML / 100))) {
        output.value = parseInt(output.value) + parseInt(10 * resCount.innerHTML / 100);
        slider.value = output.value;
    }
};

sliderMinus.onclick = function(e) {
    if(output.value >= parseInt(10 * resCount.innerHTML / 100)) {
        output.value = parseInt(output.value) - parseInt(10 * resCount.innerHTML / 100);
        slider.value = output.value;
    }
};