const humberger_menu = document.querySelector(".humberger-menu");
const item_menu = document.querySelectorAll(".item-menu");
const title_portofolio = document.querySelectorAll(".title-portofolio");
const item_portofolio = document.querySelectorAll(".item-portofolio");

let humberger_menu_active = false;

// mengatur navigasi humberger menu
humberger_menu.addEventListener("click", function(event) {
    if(!humberger_menu_active) {
        humberger_menu_active = true;
        document.getElementById("menu").style.display = "block";
        event.target.src = "./assets/images/icon-close-menu.svg";
    }else{
        humberger_menu_active = false;
        document.getElementById("menu").style.display = "none";
        event.target.src = "./assets/images/icon-menu.svg";
    }
}); 


// menghapus class aktif pada menu yang aktif sebelumnya
function removeActiveMenu(type){
    let menus = type == "active" ? item_menu : (type == "tp-active" ? title_portofolio : item_portofolio); 
    for (menu of menus)
        menu.classList.remove(type);        
}

// menunjukan block portofolio 
function showItemPortofolio(item){
    document.getElementById(item).classList.add('ip-active');
}

// mengaktifkan menu yang saat ini dipilih
item_menu.forEach(element => {
    element.addEventListener("click", function(event) {
        removeActiveMenu("active");
        event.target.classList.add("active");
    });
});


// menampilkan block portofolio sesuai dengan tipe yang dipilih
title_portofolio.forEach(element => {
    element.addEventListener("click", function(event) {
        removeActiveMenu("tp-active");
        removeActiveMenu("ip-active");
        event.target.classList.add("tp-active");
        showItemPortofolio(event.target.title);
    });
});