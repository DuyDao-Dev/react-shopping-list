import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import {useState} from 'react';

let [newItem, setNewItem] = useState('');
let [newItemList, setNewItemList] = useState([]);

function App() {

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
            </main>
        </div>
    );
}

export default App;
