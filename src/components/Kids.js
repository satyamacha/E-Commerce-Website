import React from 'react'
import { kidDataSet } from '../data'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


import ItemCard from './ItemCard';

function Kids() {
  
 
    return(
           <div>
                 <div className="container-fluid  p-0" style={{boxSizing:"border-box"}}>
                       <div className="row justify-content-center headImagediv" >
                      <div className="col " style={{display:"flex",justifyContent:"center"}}>
                     <div>
                     <img className="img-fluid headImages" src="kid.jpg" />
                     </div>
                    
                      </div>
                    </div>
                 </div>

                <div className='container py-4'>
                 <div className='row'>
                        <div className='col-12 text-center' >
                            <h1 className='headfont'>Kid's Wear</h1>
                            <hr/>
                        </div>
                 </div>
               </div>
             <div className='container'>
                 <div className='row Products justify-content-center'>
                 {kidDataSet.map((item, index) => {
                  return (
                <ItemCard
                img={item.imageUrl}
                price={item.price}
                name={item.name}
                rating={item.rating}
                item={item}
                key={index}
                />
                  );
                })}
                    
                 </div>
             </div>
           </div>
             
      

        
    )
}

export default Kids