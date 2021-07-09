import React from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import './App.css';

import AddItemForm from '../AddItemForm/AddItemForm.js';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import {useState, useEffect} from 'react';

function App() {

    //On load, get guests
    useEffect(() => {
        getItem()
    }, [])
    //POST API
    const addItem = (newItem) => {
        axios.post('/list', newItem )
        .then(response => {
                console.log('Item added successfully');
            /* Here should be the function to get items so it can update DOM*/
            getItem()
        }).catch(err => {
            alert('Error Adding Item');
            console.log(err);
        })
    };

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
                <AddItemForm addItem={addItem}/>
                {itemList.map(item =>
                    (<ShoppingItem key={item.id} item={item} getItems={getItem}/>)
                )}
            </main>
        </div>
    );
}

export default App;
