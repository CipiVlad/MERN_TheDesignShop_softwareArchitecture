import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <nav>
                <a href="/">THE DESIGN SHOP</a>
                <ul>
                    <li><a href="">Less than 30$</a></li>
                    <li> <Link to="./login">Login</Link></li>
                    <li> <Link to="./random">RandomProduct</Link></li>

                </ul>
            </nav>
        </header>

    )
}

export default Navbar