import '.ShoppingItem.css';

function ShoppingItem ({item}) {
    
    //conditional render:
    //  if item.isPurchased is true, show Purchased
    //  else, show buttons
    const isPurchasedElement = ({isPurchased}) => {
        if (isPurchased){
            return <div>Purchased</div>;
        } else {
            return (
                <div>
                    <button>Buy</button>
                    <button>Remove</button>
                </div>
                );
        }
    }
    return (
      <>
        <section className="shoppingItem">
            <div>{item.item}</div>
            <div>{item.quantity} {item.unit}</div>
            {isPurchasedElement(item.isPurchased)}
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