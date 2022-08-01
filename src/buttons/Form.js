

import React from "react";
import { useCart } from "react-use-cart";


class Form extends React.Component {

  
  constructor() {
    super();
    this.state = { showMessage: false };
  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  };

  render() {
   
    return (
      <span>
       
        <button onClick={this._showMessage.bind(null, true)}   className="btn btn-dark ms-2 mb-3 " style={{color:"greenyellow"}}>Buy Now</button>
        
        {this.state.showMessage && (
         
                     

                     <section class=" mt-5" id="popup" >

<form  className="mb-3">
    <button type="button" id="close"onClick={this._showMessage.bind(null, false)} class="close"  >X</button>
   
    <h1 id="detailsheading">Billing details</h1>

  <div class="row " id="form-container">

    <div class="col-md-5 col-9 ">


        <label for="your_name">Name</label>
        <input type="text" id="your_name" name="yourname"/>
        
        <label for="your_email">Email Address</label>
        <input type="email" id="your_email" name="youremail" />
        
        <label for="your_phone">Phone Number</label>
        <input type="tel" id="your_phone" name="yourphone" />

        <label for="address">Shipping Address</label>
        <textarea id="address" name="youraddress" ></textarea>
        
       
    </div>
     
      
    <div class="col-md-5 col-9">

        <label for="programtype">Select your Card Type</label>
        <select id="programtype" name="Card Type">
        <option value="ug">Rupay</option>
        <option value="pg">Visa</option>
        <option value="PhD">Master Card</option>  
        </select>
        
        <label for="your_phone">Card Number</label>
        <input type="tel" id="your_phone" name="yourphone" />
        
       
        
        

        <fieldset>
            <legend>Download invoice</legend>
            <label>
            <input type="radio" name="yesorno" value="yes"  />
              Yes
            </label>
            <label >
            <input type="radio" name="yesorno" value="no" className="ms-2"/>
              No
            </label>
           
            </fieldset>
            
        
        <input type="submit" onClick={() => alert("Thanks for shopping")} value="Submit" />
        <input type="reset" value="Reset" />

    </div>
          





  </div> 
   
</form>

</section>
          
        )}
      </span>
    );
  }
}
export default Form
