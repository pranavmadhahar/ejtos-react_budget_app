import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import  ExpenseTotal from "./ExpenseTotal"

const Budget = () => {
    const { budget, currency } = useContext(AppContext);

    const [budgetchange, setbudget] = useState(budget);

    const {totalExpenses} = ExpenseTotal;
    
    
   
    const onPlus = () => {

        if (budgetchange + 10 > 20000) {

            alert("Value cannot exceed 20000");
            
        } else {
            setbudget(budgetchange + 10);
            
                        
        }

        
    }
    
    const onMinus = () => {

        if (budgetchange - 10 < 960) {

            alert("You cannot reduce the budget value lower than the spending");

            
        } else {
            setbudget(budgetchange - 10);
            
        }
        
    }

    const onChange = (e) => {
        setbudget(budgetchange);
      };
    

    return (
        

        <div className="input-group d-flex justify align-items-center">
         <span id="budget-box" className="mx-4">Budget</span>   
  <input type="text" className="form-control" placeholder= '' value= { `${currency} ${budgetchange}` } onChange={ onChange } aria-label="Recipient's username with two button addons" style={ {height: "57px"} }  />
  <button className="btn btn-outline-secondary" type="button" onClick={onPlus} style={ {height: "57px", background: "#c4ffc4", color: "black", border: "1px solid transparent"} } >+</button>
  <button className="btn btn-outline-secondary" type="button" onClick={onMinus} style={ {height: "57px", background: "#ffdede", color: "black", border: "1px solid transparent"} }  >-</button>
</div>

        // <div className='alert alert-secondary'>
        //     <span>Budget: £{budget}</span>
        // </div>
    );
};
export default Budget;
