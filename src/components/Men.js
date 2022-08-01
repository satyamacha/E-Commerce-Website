import React from 'react'
import { menDataSet } from '../data'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


import ItemCard from './ItemCard';

function Men() {
  
 
    return(
           <div>
                  
                  <div className="container-fluid  p-0" style={{boxSizing:"border-box"}}>
                       <div className="row justify-content-center headImagediv" >
                      <div className="col " style={{display:"flex",justifyContent:"center"}}>
                     <div>
                     <img className="img-fluid headImages" src="virat.webp" />
                     </div>
                    
                      </div>
                    </div>
                 </div>
                <div className='container '>
                 <div className='row'>
                        <div className='col-12 text-center' >
                            <h1 className='headfont'>Men's Wear</h1>
                            <hr/>
                        </div>
                 </div>
               </div>
             <div className='container'>
                 <div className='row Products justify-content-center'>
                 {menDataSet.map((item, index) => {
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
                     {/* {menDataSet.map(cardItem)} */}
                 </div>
             </div>
           </div>
             
      

        
    )
}

export default Men