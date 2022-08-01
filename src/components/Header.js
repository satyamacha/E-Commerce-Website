import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../buttons/Cart'
import { useCart } from "react-use-cart";


 



function Header() {
    const {
    
        totalUniqueItems,
        
      } = useCart();
    return (
        <>


<nav id="mainNavbar" className="navbar navbar-expand-lg bg-dark  header">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars" style={{fontSize:"36px",color:"white"}}></i>
                    </button>
                    <div style={{display:"flex"}} className="companyInfo">
                        <img src="logo.png" alt="" width="180" class="mb-3 headLogo"/> 
                        <h3 id="company">PANTHER</h3>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Men">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Women">Women</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" to="/Kids">Kids</Link>
                            </li> 
                        </ul>
                    </div>
                    <Link to='/Cart' className='nav-link'>
                    <span className='fa fa-shopping-cart me-1 '> Cart({totalUniqueItems})</span>
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Header