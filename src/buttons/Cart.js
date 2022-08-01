import React from "react";
import { useCart } from "react-use-cart";
import Form from "./Form";



const Cart = () => {

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
 
  

   if (isEmpty) return(
     <div className="container-fluid  p-0" style={{boxSizing:"border-box"}}>
          <div className="row justify-content-center" id='emptycart'>
                <div className="col-6 " style={{display:"flex",justifyContent:"center"}}>
                     <div>
                     <img className="img-fluid" src="emptycart.png" />
                     </div>
                    
                </div>
          </div>
     </div>
   )
    // <h1 className="text-center"> Your cart isEmpty </h1>;
  return (
     <>
    <section className="container p-0">
           

      <div className="row justify-content-center p-0"  id='table' >
        <div className="col-12 ">
          <h5>
            {" "}
            Cart ({totalUniqueItems}) total Item :({totalItems})
          </h5>
          <table className="table table-light m-0 p-0">
            <tbody>
                <tr>
                    
                <th>Product</th>
                <th>Product Name</th>
                <th>Price</th>
                <th >&nbsp;&nbsp;Quantity</th>
                
                </tr>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.imageUrl}  style={{ height: "6rem" }} />
                    </td>

                    <td>{item.name}</td>

                    <td>&#8377;&nbsp;{item.price}</td>

                    

                    <td>
                      <button  style={{ border: "2px solid #f31515" }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn  ms-2"
                      ><b>-</b> </button>
                      &nbsp; &nbsp; 
                      <h6 style={{display:"inline"}}>{item.quantity}</h6>
                      &nbsp; 
                      <button  style={{ border: "2px solid greenyellow" }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn  ms-2"
                      > <b>+</b> </button>
                      <button  
                        onClick={() => removeItem(item.id)}
                        className="btn btn-danger ms-2 mt-lg-0 mt-1"
                      >
                        {" "}
                        RemoveItem{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="col-auto ms-auto">
            <h2> Total price: &#8377; {cartTotal}.00 </h2>
          </div>
        </div>
        <div>
        <div className="col-auto mb-2">
       
        <button onClick={() => emptyCart()} id="registration" className="btn  ms-2" style={{backgroundColor:"greenyellow",color:"black"}}>
         Clear Cart
        </button>
      
       </div>
        </div>
        
        <Form/>
      </div> 
    </section>










    </>
  );
};

export default Cart;
