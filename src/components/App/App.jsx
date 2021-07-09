import React from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';

import AddItemForm from '../AddItemForm/AddItemForm.js';

function App() {

    const addItem = (newItem) => {
        axios.post('/list', newItem )
          .then(response => {
              console.log('Item added successfully');
            /* Here should be the function to get items so it can update DOm*/
          })
          .catch(err => {
            alert('Error Adding Item');
            console.log(err);
          })
      };


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <AddItemForm addItem={addItem}/>
            </main>
        </div>
    );
}

export default App;
