import React from "react";
import { useCart } from "react-use-cart";
const ItemCard = (props) => {
  const { addItem } = useCart();
  return(
               <div class="card col-lg-4 col-sm-10 col-md-4 px-0" >
               <img class="img-fluid" src={props.img}  alt="Card image cap"/>
              <div class="card-body">
               <h5 class="card-title">{props.name}</h5>
               <h6 class="card-text priceClass"><span>&#x20b9;</span>{props.price}</h6>
                <p class='ratingClass'>{props.rating} &nbsp;<span>&#9733;</span></p>
                <button  class="btn "   onClick={() => addItem(props.item)}    style={{backgroundColor:"#49d9bd",color:"white"}}><i className='fas fa-cart-arrow-down'></i>&nbsp;&nbsp;Add to Cart</button>
              </div>
            </div>
           );
};

export default ItemCard;
