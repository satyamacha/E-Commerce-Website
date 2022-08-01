import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './components/Home'
import Men from './components/Men'
import Kids from './components/Kids'
import Women from './components/Women'
import Cart from './buttons/Cart'

import { CartProvider } from "react-use-cart";

function App() {
    return (
        <>

            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path='/' element={<Home/>} />
                    <Route path='/Men' element={<Men/>} />
                    <Route path='/Kids' element={<Kids/>} />
                    <Route path='/Women' element={<Women/>} />
                    <Route path='/Cart' element={<Cart/>} />


                </Routes>
                <Footer/>
                
            </BrowserRouter>
        </>
    )
}

export default App