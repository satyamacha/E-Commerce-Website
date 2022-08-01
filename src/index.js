import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './index.css'
import App from './App'


import { CartProvider } from "react-use-cart";

ReactDOM.render(
    <>
       <CartProvider>
       <App />
       </CartProvider>

      
       
        

    </>,
    document.getElementById('root')
)
