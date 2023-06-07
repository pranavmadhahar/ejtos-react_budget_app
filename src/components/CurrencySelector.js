
import React, { useContext, useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {

  const { dispatch, currency } = useContext(AppContext);
  

  
  const handleclick = (e) => {
    
   return  dispatch({
      type: "CHG_CURRENCY",
      payload: e.target.innerHTML
    });
    
  }

  return (
    
    <Dropdown  >
    <Dropdown.Toggle variant="success" id="dropdown-basic" style= {{height: "57px", width: "100%", background: "#c4ffc4", color: "black", border: "1px solid transparent"}}  >
     
      {`Currency  (${currency})`}
     
    </Dropdown.Toggle>

    <Dropdown.Menu id="menu"   style= {{width: "100%", background: "#c4ffc4"}}  >
      <Dropdown.Item className="item" href="#"  onClick={handleclick} style= {{ border: "2px solid white" }}  value="£ Pound"> £ Pound </Dropdown.Item>
      <Dropdown.Item className="item" href="#"  onClick={handleclick} style= {{ border: "2px solid white" }} value="$ Dollar"> $ Dollar </Dropdown.Item>
      <Dropdown.Item className="item" href="#"  onClick={handleclick} style= {{ border: "2px solid white" }} value="€ Euro"> € Euro </Dropdown.Item>
      <Dropdown.Item className="item" href="#"  onClick={handleclick} style= {{ border: "2px solid white" }} value="₹ Rupee"> ₹ Rupee </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>


  )
}

export default CurrencySelector