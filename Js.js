console.log("started...");


let display = document.querySelector(".display");
const clear =  document.querySelector(".clear");
const division = document.querySelector(".division");
const multiply = document.querySelector(".multiply");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const equal = document.querySelector(".equal");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

console.log("running");


clear.addEventListener("click",function(){
    display.value = null;
});



one.addEventListener("click",function(){
    display.value = display.value + one.textContent;
});
two.addEventListener("click",function(){
    display.value = display.value + two.textContent;
});
three.addEventListener("click",function(){
    display.value = display.value + three.textContent;
});
four.addEventListener("click",function(){
    display.value = display.value + four.textContent;
});
five.addEventListener("click",function(){
    display.value = display.value + five.textContent;
});
six.addEventListener("click",function(){
    display.value = display.value + six.textContent;
});
seven.addEventListener("click",function(){
    display.value = display.value + seven.textContent;
});
eight.addEventListener("click",function(){
    display.value = display.value + eight.textContent;
});
nine.addEventListener("click",function(){
    display.value = display.value + nine.textContent;
});
zero.addEventListener("click",function(){
    display.value = display.value + zero.textContent;
});





plus.addEventListener("click",function(){   
});
minus.addEventListener("click",function(){
});
multiply.addEventListener("click",function(){
});
division.addEventListener("click",function(){
});
equal.addEventListener("click",function(){
});


