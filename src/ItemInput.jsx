const ItemInput = ({ newItem, setNewItem }) => {
    return (
        <div className="form-row">
            <label htmlFor="newItem">New Item</label>
            <input type="text" id="newItem" value={newItem} onChange={e => setNewItem(e.target.value)} />
        </div>
    );
}

export default ItemInput;