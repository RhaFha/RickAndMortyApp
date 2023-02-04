import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
        <div className="col">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <h1 className="text-center ubuntu my-4">
                        Rick & Morty
                    </h1>
                </Link>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
