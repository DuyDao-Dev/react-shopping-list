import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import {useState} from 'react';

function App() {
    let [newItem, setNewItem] = useState('');
    let [itemList, setItemList] = useState([]);

    const clearItemsFromDb = (shoppingList) => {
        console.log('clear list', shoppingList);
        axios.delete(`/list/${shoppingList}`)
            .then(response => {
                setShoppingList('');
            })
    }

    const getItem = () => {
        axios.get('/list')
        .then(response => {
            setItemList(response.data);
        })
        .catch(error => {
            alert (`Error getting items!`, error);
            console.log(error);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                {itemList.map(item =>
                    (<ShoppingItem item={item}/>)
                )}
            </main>
        </div>
    );
}

export default App;
