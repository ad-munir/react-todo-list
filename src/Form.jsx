import { useState } from 'react'
import ItemInput from './ItemInput';


const Form = ({ addTodo }) => {

    const [newItem, setNewItem] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(newItem);
        setNewItem('');
    }

    return (
        <form className="form" onSubmit={handleSubmit}>

            <ItemInput newItem={newItem} setNewItem={setNewItem} />

            <button className='btn' disabled={!newItem}>Add</button>
        </form>
    );
}

export default Form;