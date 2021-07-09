import '.ShoppingItem.css';

function ShoppingItem ({item, getItems}) {
    const handleBuy = () => {
        console.log('bought item:', item.id);
        axios.put(`/item/${item.id}`)
          .then(response => {
            //Once item has been updated, refresh items list
            getItems();
          })
          .catch(err => {
            alert('Error Updating Item');
            console.log(err);
          })
    } //end handleBuy
    
    const handleRemove = () => {
        console.log('deleting item:', item.id);
        axios.delete(`/item/${item.id}`)
          .then(response => {
            //Once item has been removed, refresh items list
            getItems();
          })
          .catch(err => {
            alert('Error Deleting Item');
            console.log(err);
          })
    } //end handleRemove
    
    return (
      <>
        <section className="shoppingItem">
            <div>{item.item}</div>
            <div>{item.quantity} {item.unit}</div>
            {/* conditional render:
            if item.isPurchased is true, show Purchased
            else, show buttons */}
            {item.isPurchased ?
            <div>Purchased</div> :
            <div>
                <button onClick={handleBuy}>Buy</button>
                <button onClick={handleRemove}>Remove</button>
            </div>
        }
        </section>
      </>
    );
  }
  
  export default ShoppingItem;
  






// Shopping item - BENJI
// buy
// PUT: /list/:id
// remove
// DELETE: /list/:id