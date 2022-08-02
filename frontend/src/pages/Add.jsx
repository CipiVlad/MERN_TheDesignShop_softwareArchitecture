import { useState } from 'react'
import Home from './Home'

const Add = ({ setProducts }) => {

    const [ProductName, setProductName] = useState('')
    const [Company, setCompany] = useState('')
    const [Price, setPrice] = useState('')
    const [ProductLink, setProductLink] = useState('')


    const addProduct = (event) => {
        event.preventDefault()
        fetch('http://127.0.0.1:9000/shop/add', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ProductName,
                Company,
                Price,
                ProductLink
            })

        })
            .then((response) => response.json())
            .then((addedProduct) => setProducts((prevProducts) => [...prevProducts, addedProduct]))

    }
    return (
        <div>
            <h2>ADD A NEW PRODUCT</h2>

            <div>
                <input type="text" placeholder="Product Name"
                    value={ProductName} onChange={(e) => setProductName(e.target.value)} required />
                <input type="text" placeholder="Company" value={Company} onChange={(e) => setCompany(e.target.value)} required />
                <input type="text" placeholder="Price" value={Price} onChange={(e) => setPrice(e.target.value)} required />
                <input type="text" placeholder="Url Picture" value={ProductLink} onChange={(e) => setProductLink(e.target.value)} required />
            </div>

            <button style={{ cursor: 'pointer' }} onClick={addProduct}>
                ADD PRODUCT

            </button>
        </div>
    )
}

export default Add