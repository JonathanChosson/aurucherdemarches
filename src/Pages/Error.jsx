import React from "react"
import "../Style/Pages/Error.css"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

const Error = () => {
    return (
        <div className="Error">
            <Header />
            <main className="Error__main">
                <section className="Error__main__section">
                    <img
                        className="border Error__main__img"
                        src="./image/abeille.png"
                        alt="Abeille"
                    />
                    <div className="border Error__main__p">
                        <h2 className="Error__main__p__h2">404</h2>
                        <h3>La page que vous demandez n'hexiste pas</h3>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Error
