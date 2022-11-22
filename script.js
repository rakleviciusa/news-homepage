const menuEl = document.getElementById("nav-menu");
const containerEl = document.getElementById("container");
const overlay=document.getElementById('overlay');
const dropdowmMenuEl = document.getElementById("dropdown-btn");
const bodyEl = document.getElementById("body");
const closeMenuEl = document.getElementById("menu-dropdown-close");


menuEl.addEventListener("click", function(){
    // containerEl.style.backgroundColor = "rgb(0,0,0,0.6)";
    // bodyEl.style.mixBlendMode = "darken";
    dropdowmMenuEl.style.display = "flex";
    overlay.style.display="block";
})

closeMenuEl.addEventListener("click", function(){
    dropdowmMenuEl.style.display = "none";
    bodyEl.style.backgroundColor = "inherit";
    overlay.style.display="none";
})

// let res = document.querySelectorAll('body :not(.menu-dropdown)');
// console.log(res);