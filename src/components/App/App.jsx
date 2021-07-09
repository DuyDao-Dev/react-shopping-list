import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import ShoppingItem from '../ShoppingItem/ShoppingItem';


function App() {
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
