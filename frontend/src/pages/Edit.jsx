import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {
    const [updateProd, setUpProd] = useState([])
    // const { id } = useParams();

    useEffect(() => {
        fetch('http://127.0.0.1:9000/shop/all')
            .then((response) => response.json())
            .then((productsArray) => setUpProd(productsArray))
    }, [])


    const [ProductName, setProductName] = useState('')
    const [Company, setCompany] = useState('')
    const [Price, setPrice] = useState('')
    const [ProductLink, setProductLink] = useState('')
    const [userId, setId] = useState('')


    function updateProduct() {
        let item = { userId, ProductName, Company, Price, ProductLink }
        console.log(item)

        fetch(`http://127.0.0.1:9000/shop/edit/${userId}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)

        })
            .then((response) => response.json())
            .then((addedProduct) => setUpProd((prevProducts) => [...prevProducts, addedProduct]))

    }

    const [deleteId, setDeleteId] = useState('')

    function deleteProduct(event) {
        event.preventDefault()
        let deletedById = { deleteId }
        fetch(`http://127.0.0.1:9000/shop/delete/${deleteId}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deletedById)
        })
            .then((response) => response.json())
            .then((deletedProd) => setDeleteId((deletedProd)))
        setDeleteId('')
    }


    return (
        <div>
            <div>
                {
                    updateProd.map((ele, i) =>
                        <div key={i} style={{ display: 'inline' }}>
                            <div>
                                <span><strong>id </strong>{ele.id}</span>
                                <span><strong>Product Name </strong>{ele.ProductName}</span>
                            </div>
                        </div>
                    )
                }


                <div>
                    <input type="text" placeholder="id" value={userId} onChange={(e) => setId(e.target.value)} required />
                    <input type="text" placeholder="Product Name"
                        value={ProductName} onChange={(e) => setProductName(e.target.value)} required />
                    <input type="text" placeholder="Company" value={Company} onChange={(e) => setCompany(e.target.value)} required />
                    <input type="text" placeholder="Price" value={Price} onChange={(e) => setPrice(e.target.value)} required />
                    <input type="text" placeholder="Url Picture" value={ProductLink} onChange={(e) => setProductLink(e.target.value)} required />
                </div>

            </div>

            <h2>EDIT PRODUCT</h2>
            <button onClick={updateProduct}>Update Product</button>
            <br />
            <button onClick={deleteProduct}>Delete Product</button>
            <br />
            <input type="text" placeholder="id" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} required />
        </div >
    )
}


export default Edit