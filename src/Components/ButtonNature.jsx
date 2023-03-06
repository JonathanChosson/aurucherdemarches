import React from "react"
import { NavLink } from "react-router-dom"
import "../Style/Components/ButtonNature.css"

const ButtonNature = ({ text, lien }) => {
    return (
        <div className="button-container-1">
            <NavLink to={lien}>
                <button>{text}</button>
            </NavLink>
        </div>
    )
}

export default ButtonNature
