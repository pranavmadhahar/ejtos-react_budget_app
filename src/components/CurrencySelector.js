
import React, { useContext, useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {

  const { dispatch } = useContext(AppContext);
  const [currency, setcurrency] = useState(" £ Pound ")

  const handleclick = (e) => {

    const newCurrency = { currency: e.target.value }
    
    dispatch({
      type: "CHG_CURRENCY",
      payload: newCurrency
    });

    setcurrency(e.target.innerHTML);
  }

  return (
    
    <Dropdown  >
    <Dropdown.Toggle variant="success" id="dropdown-basic" style= {{height: "57px", width: "100%"}}  >
     
      {`Currency  (${currency})`}
     
    </Dropdown.Toggle>

    <Dropdown.Menu id="menu"   style= {{width: "100%"}}  >
      <Dropdown.Item className="item" href="#"  onClick={handleclick}  value="£ Pound"> £ Pound </Dropdown.Item>
      <Dropdown.Item className="item" href="#"  onClick={handleclick}  value="$ Dollar"> $ Dollar </Dropdown.Item>
      <Dropdown.Item className="item" href="#"  onClick={handleclick}  value="€ Euro"> € Euro </Dropdown.Item>
      <Dropdown.Item className="item" href="#"  onClick={handleclick}  value="₹ Rupee"> ₹ Rupee </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>


  )
}

export default CurrencySelector