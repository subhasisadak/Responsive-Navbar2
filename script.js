let menuList = document.getElementById("menuList");
let cross = document.querySelector(".fa-xmark");
let menu = document.querySelector(".fa-bars");
menuList.style.maxHeight = "0px";
cross.style.display = "none";
function toggleMenu() {
    if(menuList.style.maxHeight === "0px"){
        menuList.style.maxHeight = "300px";
        menu.style.display = "none";
        cross.style.display = "block";
    }
    else{
        menuList.style.maxHeight = "0px";
        menu.style.display = "block";
        cross.style.display = "none";
    }
    
}
// console.log("lol")