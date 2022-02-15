function openNavMenu() {
    let div = document.querySelector(".menu-container");
    div.classList.remove(".menu-container");
    div.classList.add("open-menu-container");

    const divHea = document.querySelector(".nav_container");
    divHea.innerHTML = "";
    const p = document.createElement("p");
    p.innerHTML = "RECHERCHER PAR CATEGORIE";
    p.classList.add("rechercher_par_categorie");
    divHea.appendChild(p);
};

function closeNavMenu() {
    let div = document.querySelector(".open-menu-container");
    div.classList.remove("open-menu-container");
    div.classList.add(".menu-container");
}