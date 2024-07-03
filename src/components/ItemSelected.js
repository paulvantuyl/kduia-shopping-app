import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        const item = {
            name: name,
            quantity: parseInt(quantity),
        };

        if (action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
            dispatch({
                type: 'ADD_QUANTITY',
                payload: item,
            });
        }
    };

    return (
        <div>
            <div className="row">
                <div className="input-group col">
                    <label
                        className="input-group-text"
                        htmlFor="inputGroupSelect01"
                    >
                        Items
                    </label>
                    <select 
                        className="form-select" 
                        id="inputGroupSelect01" 
                        onChange={(event) => setName(event.target.value)}
                    >
                        <option defaultValue>Choose&hellip;</option>
                        <option value="Shirt" name="Shirt">Shirt</option>
                        <option value="Dress" name="Dress">Dress</option>
                        <option value="Jeans" name="Jeans">Jeans</option>
                        <option value="Dinner set" name="Dinner set">Dinner set</option>
                        <option value="Bags" name="Bags">Bags</option>
                    </select>
                </div>

                <div className="input-group col">
                    <label
                        className="input-group-text"
                        htmlFor="inputGroupSelect02"
                    >
                        Quantity
                    </label>
                    <select 
                        className="form-select" 
                        id="inputGroupSelect02"
                        onChange={(event) => setAction(event.target.value)}
                    >
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                </div>
                    
                <div className="input-group col">
                    <input
                        className="form-control"
                        required="required"
                        type="number"
                        id="cost"
                        style={{size: 10}}
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    >
                    </input>
                    <button
                        className="btn btn-primary"
                        onClick={submitEvent}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ItemSelected;
