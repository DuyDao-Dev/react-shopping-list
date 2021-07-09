//The `Reset` button should clear the purchased status from all items, allowing the list to be re-used. 
//The `Clear` button should remove all items from the list, deleting them from the database.

let [shoppingList, setShoppingList]= useState('');
let [listStatus, setListStatus] = useState('');

function resetList(){

};

function clearList(({shoppingList, clearItemsFromDb})){
    for(item of shoppingList){
        setShoppingList('');
    }

    const handleDelete = () => {
        clearItemsFromDb(shoppingList)
    }


};

return(
<ButtonGroup>
    <button id="reset" type="button" onClick={resetList}>Reset</button>
    <button id="clear" type="button" onClick={clearList}>Clear</button>
)