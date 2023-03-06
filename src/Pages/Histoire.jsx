import React from "react"
import "../Style/Pages/Histoire.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Histoire = () => {
    return (
        <div className="Histoire">
            <Header></Header>
            <main className="Histoire__main">
                <section className="Histoire__main__section">
                    <img
                        className="border Histoire__main__img"
                        src="./image/Portrait-isa.jpg"
                        alt="Protrait Isabelle Roux"
                    />
                    <div className="border Histoire__main__p">
                        <h2>DATE</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quam dignissimos ipsa perspiciatis doloremque,
                            obcaecati quis, eos itaque, eveniet dolor vero magni
                            magnam repudiandae laudantium perferendis?
                            Voluptatem fugiat perferendis quo dolore. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Asperiores et qui repellendus eum quod, hic fuga at
                            vitae magni reprehenderit vero aut ipsa quos
                            expedita aliquam libero, ut temporibus animi?
                        </p>
                    </div>
                </section>
                <section className="Histoire__main__section">
                    <img
                        className="border Histoire__main__img"
                        src="./image/Portrait-isa.jpg"
                        alt="Protrait Isabelle Roux"
                    />
                    <div className="border Histoire__main__p">
                        <h2>DATE</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quam dignissimos ipsa perspiciatis doloremque,
                            obcaecati quis, eos itaque, eveniet dolor vero magni
                            magnam repudiandae laudantium perferendis?
                            Voluptatem fugiat perferendis quo dolore. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Asperiores et qui repellendus eum quod, hic fuga at
                            vitae magni reprehenderit vero aut ipsa quos
                            expedita aliquam libero, ut temporibus animi?
                        </p>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Histoire
