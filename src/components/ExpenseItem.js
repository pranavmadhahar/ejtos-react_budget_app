import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const reduceAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td> <img  onClick={event=> increaseAllocation(props.name)}  src="https://www.clipartkey.com/mpngs/m/55-551577_button-plus.png" alt="" style={{ width:"40px", height: "30px", cursor: "pointer" }} /> </td>

        <td> <img  onClick={event=> reduceAllocation(props.name)}  src="https://pngimg.com/uploads/minus/minus_PNG37.png" alt="" style={{ width:"35px", height: "35px", cursor: "pointer" }} /> </td>

        {/* <td><button onClick={event=> reduceAllocation(props.name)}>-</button></td> */}
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
