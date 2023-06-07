import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import  ExpenseTotal from "./ExpenseTotal"

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);

    const [budgetchange, setbudget] = useState(budget);

    const {totalExpenses} = ExpenseTotal;
    
    
   
    const onPlus = () => {

        if (budgetchange + 10 > 20000) {

            alert("Value cannot exceed by 20000");
            
        } else {
            setbudget(budgetchange + 10);
            
                        
        }

        
    }
    
    const onMinus = () => {

        if (budgetchange - 10 < 960) {

            alert("You cannot reduce budget value lower than the spending");

            
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
  <input type="text" className="form-control" placeholder= '' value= { `£ ${budgetchange}` } onChange={ onChange } aria-label="Recipient's username with two button addons" />
  <button className="btn btn-outline-secondary" type="button" onClick={onPlus}  >+</button>
  <button className="btn btn-outline-secondary" type="button" onClick={onMinus} >-</button>
</div>

        // <div className='alert alert-secondary'>
        //     <span>Budget: £{budget}</span>
        // </div>
    );
};
export default Budget;
