
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RandomProduct = () => {
    const [products, setProducts] = useState([])

    function getRandomProduct() {

        fetch('http://127.0.0.1:9000/shop/all')
            .then((response) => response.json())
            .then((productsArray) => setProducts(productsArray))
    }

    return (
        <div>
            {
                products.map((product, i) =>
                    <div key={i}>
                        <img src={product.ProductLink} alt="foto" />
                        <Link to={`/details/${product.id}`}>
                            <h2>{product.ProductName}</h2>
                        </Link>
                    </div>
                )
            }
            <button onClick={getRandomProduct}>Random Products</button>
        </div>
    )
}

export default RandomProduct