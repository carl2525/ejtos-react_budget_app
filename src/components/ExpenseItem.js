
import React, { useContext } from 'react';
import { TiDelete, TiMinus, TiPlus, TiPlusOutline, TiUserAdd } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,Currency } = useContext(AppContext);

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

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><button style={{backgroundColor:'green', borderRadius:'100%' }}><TiPlus size='2.2em' color='white' onClick={event=> increaseAllocation(props.name)}>+</TiPlus></button></td>
        <td><button style={{backgroundColor:'maroon', borderRadius:'100%' }}><TiMinus size='2.2em' color='white' onClick={event=> decreaseAllocation(props.name)}></TiMinus></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;