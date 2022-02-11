function openNavMenu() {
    let div = document.querySelector(".menu-container");
    div.classList.remove(".menu-container");
    div.classList.add("open-menu-container");

    let headerContent = document.querySelector(".nav_container").innerHTML = "";
    let p = document.createElement("p");
    p.classList.add("rechercher_par_categorie");
    headerContent.append(p);
};

function closeNavMenu() {
    let div = document.querySelector(".open-menu-container");
    div.classList.remove("open-menu-container");
    div.classList.add(".menu-container");

}