import React from "react"
import "../Style/Components/ImageBox.css"

const ImageBox = ({ lien, alternative }) => {
    return <img className="border" src={lien} alt={alternative} />
}

export default ImageBox
