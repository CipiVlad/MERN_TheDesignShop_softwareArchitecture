
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RandomProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:9000/shop/all')
            .then((response) => response.json())
            .then((productsArray) => setProducts(productsArray))
    }, [])
    function getMultipleRandom(products, num) {
        const shuffled = [...products].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }
    console.log(getMultipleRandom(products, 6));


    return (
        <div>

            {
                getMultipleRandom(products, 6).map((product, i) =>
                    <div key={i}>
                        <img src={product.ProductLink} alt="foto" />
                        <Link to={`/details/${product.id}`}>
                            <h2>{product.ProductName}</h2>
                        </Link>
                    </div>
                )
            }
            <button >Random Products</button>
        </div>
    )
}

export default RandomProduct