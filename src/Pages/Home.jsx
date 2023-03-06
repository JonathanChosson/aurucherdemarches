import React from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import ImageBox from "../Components/ImageBox"
import "../Style/Pages/Home.css"

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main className="Home__main">
                <section className="Home__main__section">
                    <img
                        className="border Home__main__img"
                        src="./image/Portrait-isa.jpg"
                        alt="Protrait Isabelle Roux"
                    />
                    <div className="border Home__main__p">
                        <h2>Titre a determiner</h2>
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
                <section className="Home__main__section">
                    <div className="border Home__main__p">
                        <h2>Titre a determiner</h2>
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
                    <img
                        className="border Home__main__img"
                        src="./image/miel-accueil.JPG"
                        alt="Pots de miel"
                    />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home
