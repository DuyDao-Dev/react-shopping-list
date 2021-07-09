import '../AddItemForm/AddItemForm.css'
import {useState} from "react"

function AddItemForm(props){
    const addItem = props.addItem;
    const [newItem, setNewItem] = useState();
    const [newQuantity, setNewQuantity] = useState();
    const [newUnit, setNewUnit] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItem) {
            console.log(newItem, newQuantity, newUnit);
            let newItemObject = {
                name: newItem,
                quantity: newQuantity,
                unit: newUnit
            }
          addItem(newItemObject);
        }
        else {
          alert('Add an item to the input');
        }
      }
    return (
        <div>
            <h1>Add New Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Item:
                        <input type="text" value={newItem} onChange={evt => {setNewItem(evt.target.value)}}/>
                    </label>
                </div>
                <div>
                    <label>
                        Quantity:
                        <input type="text" value={newQuantity} onChange={evt => {setNewQuantity(evt.target.value)}}/>
                    </label>
                    <label>
                        Unit:
                        <input type="text" value={newUnit} onChange={evt => {setNewUnit(evt.target.value)}}/>
                    </label>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddItemForm;