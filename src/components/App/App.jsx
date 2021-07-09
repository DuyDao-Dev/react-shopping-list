import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import {useState} from 'react';

function App() {

    const clearItemsFromDb = (shoppingList) => {
        console.log('clear list', shoppingList);
        axios.delete(`/list/${shoppingList}`)
            .then(response => {
                setShoppingList('');
            })
    }
    let [newItem, setNewItem] = useState('');
    let [newItemList, setNewItemList] = useState([]);

    const getItem = () => {
        axios.get('/list')
        .then(response => {
            setNewItemList(response.data);
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
                <ShoppingItem item={item}/>
            </main>
        </div>
    );
}

export default App;
