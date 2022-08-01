import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer class=" Footer">
        <div class="container ">
          <div class="row py-4 justify-content-center ">

            <div class="col-lg-4 col-md-6  col-6 mb-lg-0">
                <div className='row justify-content-center'>
                    <div className='col'>
                    <h3 className='px-4' id='pantherLogo'>PANTHER</h3>

                    <img src="logo.png" alt="" width="180" class="mb-3"/> 
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-6  col-6 mb-lg-0">
              
                  <h5 class="text-uppercase font-weight-bold mb-4">Shop</h5>
              <ul class="list-unstyled mb-0">
              <li class="mb-2"><Link to="/Men" class="footerLinks">For Men</Link></li>
                <li class="mb-2"><Link to="/Women" class="footerLinks">For Women</Link></li>
               
                <li class="mb-2"><Link to="/kids" class="footerLinks">For Kids</Link></li>
                
              </ul> 
            </div>

            <div class="col-lg-2 col-md-6  col-6 mb-lg-0">
              <h5 class="text-uppercase font-weight-bold mb-4">Media Handles</h5>
              <ul class="list-unstyled mb-0">
                 <div  style={{display:'flex',fontSize:'2rem'}}>
                 <li  ><i class="fa fa-twitter"></i></li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <li ><i class="fa fa-facebook"></i></li>
                 </div>

                 <div  style={{display:'flex',fontSize:'2rem'}}>
                 <li ><i class="fa fa-instagram"></i></li>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li ><i class="fa fa-pinterest"></i></li>
                 </div> 
                
              </ul>
            </div>


            <div class="col-lg-4 col-md-6 col-6 mb-lg-0">
              <h5 class="text-uppercase font-weight-bold mb-4">Contact Us</h5>
              <p class=" mb-4">
                Buildings Alyssa
Begonia and Clover situated in Embassy Tech Village,
Outer Ring Road,
Devarabeesanahalli Village,
Varthur Hobli,
Bengaluru - 560103, India
             </p>
             
            </div>
          </div>
        </div>
    
        
        <div class=" ">
          <div class="container text-center">
            <p class=" mb-0 py-2">© PANTHER Private Limited</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer