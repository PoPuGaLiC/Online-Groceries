import React, {useState} from 'react';
import ProductList from "./components/ProductList";
import './styles/App.css'
import Header from "./components/Header";
import BusketItem from "./components/BusketItem";
function App() {

  return (
    <div className="App">

        <Header/>
        <ProductList/>
        <BusketItem/>
    </div>
  );
}

export default App;
