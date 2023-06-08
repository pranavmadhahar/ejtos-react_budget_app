
import React, { useContext } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {

  const { dispatch, currency } = useContext(AppContext);
  
  const handleclick = (e) => {
    
   return  dispatch({
      type: "CHG_CURRENCY",
      payload: e.target.innerHTML.slice(1, 2)
    });

  }

  // const element = document.getElementsByClassName("item");
  // let text = element.getAttribute("value");

  return (
    
    <Dropdown  >
    <Dropdown.Toggle variant="success" id="dropdown-basic" style= {{height: "57px", width: "100%", background: "#c4ffc4", color: "black", border: "1px solid transparent"}}  >

      {/* Currency ($ Dollar) */}
     
      {`Currency (${currency})`}
     
    </Dropdown.Toggle>

    <Dropdown.Menu id="menu"   style= {{width: "100%", background: "#c4ffc4"}}  >
      <Dropdown.Item className="item" href="#"  onClick={handleclick}  value="$ Dollar"> $ Dollar </Dropdown.Item>
      <Dropdown.Item className="item" href="#"  onClick={handleclick}  value="£ Pound"> £ Pound</Dropdown.Item>
      <Dropdown.Item className="item" href="#"  onClick={handleclick}  value="€ Euro"> € Euro </Dropdown.Item>
      <Dropdown.Item className="item" href="#"  onClick={handleclick}  value="₹ Rupee"> ₹ Rupee </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>


  )
}

export default CurrencySelector