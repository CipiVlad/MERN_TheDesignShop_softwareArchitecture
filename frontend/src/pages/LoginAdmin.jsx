import React from 'react'
import { Link } from "react-router-dom"

const LoginAdmin = () => {
    return (
        <div>
            <h2>Login Admin Page</h2>
            <Link to='/login/add'>Add Product</Link>
            <br />
            <Link to='/login/edit/:id'>Edit Product</Link>

        </div>
    )
}

export default LoginAdmin