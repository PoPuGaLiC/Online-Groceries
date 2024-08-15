import React, {useEffect, useMemo, useState} from 'react';
import ProductList from "./components/ProductList";
import './styles/App.css'
import Header from "./components/Header";
import Busket from "./components/UI/buttons/Busket";
import ModalBusket from "./components/UI/modal/ModalBusket";
import Search from "./components/UI/input/Search";
import productsData from "./products.json"
import Range from "./components/UI/input/Range";

function App() {
    const [busketCount,setCount] = useState(0);
    const [modal, setModal] = useState(false);
    const [productBusket, setProductBusket] = useState([])
    const [pages, setPages] = useState([
        {id:"catalog", name:"Каталог", active: true},
        {id:"stores", name:"Магазины", active: false},
        {id:"discounts", name:"Скидки", active: false},

    ]);
    const [searchQuery, setSearchQuery] = useState('')
    const [products, setProducts] = useState(productsData)
    const [minCost, setMinCost] = useState(0)
    const [maxCost, setMaxCost] = useState(100)

    function changeBasketCount(){
        setCount(productBusket.reduce((sum,p)=>sum+p.count,0))
    }

    const searchedProducts = useMemo(()=>{
        return products.filter(product=>{
            return (product.name.toLowerCase().includes(searchQuery.toLowerCase())&&((product.cost>=minCost)&&(product.cost<=maxCost)))
        })
    },[searchQuery, products,minCost,maxCost])

    useEffect(()=>{
        changeBasketCount()
    },[productBusket])


    function changeProductBusket(productID, count){
        if (productBusket.find(x => x.id === productID)){
            if(count === 0){
                setProductBusket([...productBusket.filter(p=>p.id!==productID)].sort((a,b)=>{return a.id-b.id}))
            }else{
                setProductBusket([...productBusket.filter(p=>p.id!==productID), {id:productID, count:count}].sort((a,b)=>{return a.id-b.id}))
            }
        }else{
            setProductBusket([...productBusket, {id:productID, count:count}].sort((a,b)=>{return a.id-b.id}))
        }
    }

    return (
    <div className="App">
        <Header pages = {pages}/>
        <div id="catalog">
            <ModalBusket
                visible={modal}
                setVisible={setModal}
                productBusket={productBusket}
                products = {products}
                changeProductBusket = {changeProductBusket}/>
            <div id="field">
                <div id="filter">
                    <Search
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <Range
                        minCost={minCost}
                        maxCost={maxCost}
                        setMinCost={setMinCost}
                        setMaxCost={setMaxCost}
                    />
                    <div>
                        <select>
                            <option>Алфавит (А-Я)</option>
                            <option>Алфавит (Я-А)</option>
                            <option>Цена по возрастанию</option>
                            <option>Цена по убыванию</option>
                        </select>
                    </div>
                    <div>
                        <input type="checkbox" id="fruits" name="fruits"/>
                        <label htmlFor="fruits">Фрукты</label>
                    </div>
                </div>
                <ProductList
                    busket = {changeProductBusket}
                    productBusket = {productBusket}
                    products = {searchedProducts}
                />
            </div>
            <Busket
                modal = {()=> setModal(true)}
                busketCount = {busketCount}
            />
        </div>
    </div>
  );
}

export default App;
