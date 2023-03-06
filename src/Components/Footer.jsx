import React from "react"
import "../Style/Components/Footer.css"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__social--pack">
                <div className="Footer__social">
                    <i className="fa-brands fa-instagram Footer__social__insta"></i>
                    <p className="Footer__social__p">@aurucherdemarches</p>
                </div>
                <div className="Footer__social">
                    <i className="fa-brands fa-facebook Footer__social__fb"></i>
                    <p className="Footer__social__p">Au Rucher de Marches</p>
                </div>
            </div>
            <div className="Footer__copyright">© Mentions légales</div>
        </div>
    )
}

export default Footer
