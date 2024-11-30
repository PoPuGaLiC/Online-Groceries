import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';	
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
		
import ProductList from "./components/ProductList";
import './styles/App.css'
import Header from "./components/Header";
import Busket from "./components/UI/buttons/Busket";
import ModalBusket from "./components/UI/modal/ModalBusket";
import Search from "./components/UI/input/Search";
import Range from "./components/UI/input/Range";
import Sort from "./components/UI/input/Sort";
import Types from "./components/UI/input/Types";
const router = createBrowserRouter([
	{
		path: '/',
		
	},
]);
function App() {
    const [modal, setModal] = useState(false);
    const [pages, setPages] = useState([
        { id: "catalog", name: "Каталог", active: true },
        { id: "stores", name: "Магазины", active: false },
        { id: "discounts", name: "Скидки", active: false },

    ]);

    return (
        
        <div className="App">
            <RouterProvider router={router} />
        <Header pages={pages} />
        <div id="catalog">
            <ModalBusket
                visible={modal}
                setVisible={setModal}
            />
            <div id="field">
                <div id="filter">
                    <Search />
                    <Range />
                    <Sort />
                    <Types />
                </div>
                <ProductList />
            </div>
            <Busket
                modal={() => setModal(true)} />
        </div>
    </div>

    );
}

export default App;
