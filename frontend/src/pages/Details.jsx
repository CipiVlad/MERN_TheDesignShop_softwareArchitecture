import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const Details = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);

    // console.log(id)
    useEffect(() => {
        fetch("http://localhost:9000/shop/details/" + id)
            .then(response => response.json())
            .then(productObj => setDetail(productObj))
    }, [id])
    if (detail) return (
        <div>
            <img src={detail.ProductLink} alt="" />
            <h2>{detail.ProductName}</h2>
            <p>{detail.Company}</p>
            <h2>{detail.Price}</h2>
            <h2>Product Description:</h2>
            <a href={detail.LinkShop}>BUY PRODUCT</a>
        </div >
    )
    else return (<h1>Loading...</h1>)
}

export default Details