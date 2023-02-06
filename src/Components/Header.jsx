import React from "react"
import "../Style/Components/Header.css"
import { Link } from "react-router-dom"
import Menu from "./Menu"

const Header = () => {
    return (
        <div className="Header">
            <div className="Header__contain">
                <img
                    className="Header__img"
                    src="./image/logo-rucher.png"
                    alt="Au Rucher de Marches"
                    title="Au Rucher de Marches"
                />
                <div className="Header__titre">
                    <Link className="link Header__titre__link" to={"/"}>
                        <h1 className="Header__titre__h1">
                            Au Rucher de Marches
                        </h1>
                    </Link>
                    <img
                        className="Header__titre__img"
                        src="./image/logo-ferme.png"
                        alt="La petite ferme de Maoliga"
                        title="La petite ferme de Maoliga"
                    />
                    <img
                        className="Header__titre__bio"
                        src="./image/logo-bio.png"
                        alt="Certifié bio"
                        title="Certifié bio"
                    />
                    <img
                        className="Header__titre__img"
                        src="./image/logo-ferme.png"
                        alt="La petite ferme de Maoliga"
                        title="La petite ferme de Maoliga"
                    />
                </div>

                <img
                    className="Header__img"
                    src="./image/logo-ferme.png"
                    alt="La petite ferme de Maoliga"
                    title="La petite ferme de Maoliga"
                />
                {/* <div id="box">
                    <img
                        id="bee"
                        src="https://www.freepnglogos.com/uploads/bee-png/bee-what-the-buzz-defining-health-buzz-words-cleanworkout-34.png"
                        alt="Abeille"
                    />
                </div> */}
            </div>
            <Menu />
        </div>
    )
}

export default Header
