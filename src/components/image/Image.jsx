import React from 'react'
import imagePath from "../../assets/edgerunners.jpg";
import './image.css'

export default function Image() {
    return (
        <section className="image">
            <img src={imagePath} />
        </section>
    )
}