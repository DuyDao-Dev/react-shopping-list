import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';

const clearItemsFromDb = (shoppingList) => {
    console.log('clear list', shoppingList);
    axios.delete(`/list/${shoppingList}`)
        .then(response => {
            setShoppingList('');
        })
}

function App() {
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
