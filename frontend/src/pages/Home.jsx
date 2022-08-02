import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Add from './Add'
// import HomeCard from '../components/HomeCard'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:9000/shop/all')
            .then((response) => response.json())
            .then((productsArray) => setProducts(productsArray))
    }, [])

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
        </div>
    )
}

export default Home