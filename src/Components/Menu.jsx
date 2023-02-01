import React from "react"
import "../Style/Components/Menu.css"
import ButtonNature from "./ButtonNature.jsx"

const Menu = () => {
    return (
        <nav className="Menu">
            <ButtonNature text={"Accueil"} lien={"/"}></ButtonNature>
            <ButtonNature text={"Histoire"} lien={"/"}></ButtonNature>
            <ButtonNature text={"Nos produits"} lien={"/"}></ButtonNature>
            <ButtonNature text={"Ferme pédagogique"} lien={"/"}></ButtonNature>
            <ButtonNature text={"Prestations"} lien={"/"}></ButtonNature>
            <ButtonNature text={"Galerie"} lien={"/"}></ButtonNature>
            <ButtonNature text={"Blog"} lien={"/"}></ButtonNature>
            <ButtonNature text={"Points de vente"} lien={"/"}></ButtonNature>
            <ButtonNature text={"Contact/Horaires"} lien={"/"}></ButtonNature>
        </nav>
    )
}

export default Menu
