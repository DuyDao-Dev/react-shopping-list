import axios from 'axios';

function ShoppingList({getItem}){
    const handleReset = () => {
        console.log('reset item', getItem);
        axios.put(`/list/all`)
        .then(response => {
            console.log(response);
            getItem();
        })
        .catch(err => {
            console.log('error resetting list', err);
        })
    }//end handleReset

    const handleClear = () => {
        axios.delete(`/list/all`)
        .then(response => {
            getItem();
        })
        .catch(err => {
            console.log(err);
        })
    }//end handleClear


return(
    <>
    <h2>Shopping List</h2>
    <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleClear}>Clear</button>
    </div>

    </>
)
};

export default ShoppingList;