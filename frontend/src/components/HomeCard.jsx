import React from 'react'

const HomeCard = (props) => {
    return (
        <main className="main-container-grid">
            <section className="section-responsive-margin">
                <img src={props.ProductLink} alt="foto" />
                <article className="display-flex-container">
                    <h2>{props.ProductName}</h2>
                    <p>{props.Price}</p>
                </article>
                <h2>{props.Company}</h2>
            </section>

        </main>
    )
}

export default HomeCard