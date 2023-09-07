let viewEle = document.querySelector(".view");
let pracEle = document.querySelectorAll(".prac");
let resEle = document.querySelector(".res");
let tranEle = document.querySelector(".trans");
let commEle = document.querySelector(".comm");
let rateEle = document.querySelector(".rate");
let allPrac = [];
let i = -1;

rateEle.onclick = function () {
    chickZero();
    if(i === -1){
        viewEle.innerHTML = parseFloat(viewEle.innerHTML) / 100;
    } else {
        viewEle.innerHTML = (parseFloat(viewEle.innerHTML) / 100) * allPrac[0];
    }
};
commEle.onclick = function () {
    chickZero();
    viewEle.innerHTML += ".";
};
tranEle.onclick = function () {
    chickZero();
    viewEle.innerHTML = - parseFloat(viewEle.innerHTML);
};
resEle.onclick = function () {
    viewEle.innerHTML = "";
    allPrac = [];
    i = -1;
};

function vieVale(num) {
    viewEle.innerHTML += num;
};

function prac(prac) {
    chickZero();
    allPrac[i += 1] = viewEle.innerHTML;
    allPrac[i += 1] = prac;
    viewEle.innerHTML = "";
};

function equa() {
    chickZero();
    allPrac[i += 1] = viewEle.innerHTML;
    i = -1;
    viewEle.innerHTML = "";
    if(allPrac[1] === "÷"){
        let eq = parseFloat(allPrac[0]) / parseFloat(allPrac[2]);
        vieVale(eq);
    }
    else if(allPrac[1] === "×"){
        let eq = parseFloat(allPrac[0]) * parseFloat(allPrac[2]);
        vieVale(eq);
    }
    else if(allPrac[1] === "-"){
        let eq = parseFloat(allPrac[0])  - parseFloat(allPrac[2]);
        vieVale(eq);
    }
    else if(allPrac[1] === "+"){
        let eq = parseFloat(allPrac[0])  + parseFloat(allPrac[2]);
        vieVale(eq);
    }
    else {
        vieVale("0");
    };
};
function chickZero () {
    if(viewEle.innerHTML === ""){
        viewEle.innerHTML = "0";
    };
};