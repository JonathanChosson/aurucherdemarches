import React from "react"
import "../Style/Components/Menu.css"
import ButtonNature from "./ButtonNature.jsx"

const Menu = () => {
    function toggleNav() {
        const navMenu = document.querySelector(".Menu__nav")
        // const navItem = document.querySelector(".Header__nav__ul")
        // navItem.classList.toggle("visible")
        // navMenu.classList.toggle("background")
        navMenu.classList.toggle("visible")
    }
    return (
        <div className="Menu">
            <i
                className="fa-solid fa-bars Header__hamburger"
                onClick={toggleNav}
            ></i>
            <nav className="Menu__nav">
                <ButtonNature text={"Accueil"} lien={"/"}></ButtonNature>
                <ButtonNature
                    text={"Histoire"}
                    lien={"/histoire"}
                ></ButtonNature>
                <ButtonNature text={"Nos produits"} lien={"/"}></ButtonNature>
                <ButtonNature
                    text={"Ferme pédagogique"}
                    lien={"/"}
                ></ButtonNature>
                <ButtonNature text={"Prestations"} lien={"/"}></ButtonNature>
                <ButtonNature text={"Galerie"} lien={"/"}></ButtonNature>
                <ButtonNature text={"Blog"} lien={"/"}></ButtonNature>
                <ButtonNature
                    text={"Points de vente"}
                    lien={"/"}
                ></ButtonNature>
                <ButtonNature
                    text={"Contact/Horaires"}
                    lien={"/"}
                ></ButtonNature>
            </nav>
        </div>
    )
}

export default Menu
