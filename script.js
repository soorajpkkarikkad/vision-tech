
let menuBtn=document.querySelector("#menu-btn");
let sideNav=document.querySelector(".sidenavbar");
menuBtn.onclick = () => {
 menuBtn.classList.toggle('fa-times');
 sideNav.classList.toggle("active")

}