import '../AddItemForm/AddItemForm.css'
import {useState} from "react"

function AddItemForm(props){

    const addItem = props.addItem; //API post function
    //Variables needed for post
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newUnit, setNewUnit] = useState('');

    //Clicking Save button will do this
    const handleSubmit = (event) => {
        event.preventDefault();
        //Item and quantity input validation
        if (newItem && newQuantity) {
            //This object will be send to the server to be added
            let newItemObject = {
                name: newItem,
                quantity: newQuantity,
                unit: newUnit
            }
            //Call POST API
            addItem(newItemObject);
            //Clearing inputs
            setNewItem('');
            setNewQuantity('');
            setNewUnit('');
        }
        else {
          alert('Fill empty fields'); //Empty fields alert
        }
      }

    //Add item form
    return (
        <div>
            <h1>Add New Item</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label className="col">
                        Item:
                        <input className="col col-sm-4" type="text" value={newItem} onChange={evt => {setNewItem(evt.target.value)}}/>
                    </label>
                </div>
                <div className="row">
                    <label className="col col-sm-2">
                        Quantity:
                        <input className="col col-sm-4" type="text" value={newQuantity} onChange={evt => {setNewQuantity(evt.target.value)}}/>
                    </label>
                    <label className=" col col-sm-2">
                        Unit:
                        <input  className="col col-sm-6"type="text" value={newUnit} onChange={evt => {setNewUnit(evt.target.value)}}/>
                    </label>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddItemForm;