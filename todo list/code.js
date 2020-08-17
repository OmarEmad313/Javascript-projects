const sideBar=document.querySelector("aside");
const main=document.querySelector("main")
const sideBarButton = document.querySelector(".sidebar_button_wrapper");
sideBarButton.addEventListener("click",()=>{
sideBar.classList.toggle("collapse");
main.classList.toggle("expand");
})