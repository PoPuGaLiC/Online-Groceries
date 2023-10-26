import React, {useEffect, useState} from 'react';
import ProductList from "./components/ProductList";
import './styles/App.css'
import Header from "./components/Header";
import BusketItem from "./components/BusketItem";
import ModalBusket from "./components/UI/modal/ModalBusket";
import Search from "./components/UI/input/Search";
function App() {
    const [busketCount,setCount] = useState(0);
    const [modal, setModal] = useState(false);
    const [productBusket, setProductBusket] = useState([])
    const [products, setProducts] = useState([
        {id:1, name: "Молоко", description: "Пастеризованное молоко", imageName: "milk.jpg", availability: true, cost: 34.56, type: "milk",},
        {id:2, name: "Яблоко", description: "Яблоко Golden", imageName: "apple.jpg", availability: true, cost: 32.67, type: "fruit",},
        {id:3, name: "Морковь Греческая", description: "Морковь Витаминная", imageName: "carrot.jpeg", availability: false, cost: 87.23, type: "fruit",},
        {id:4, name: "Морковь", description: "Морковь Витаминная", imageName: "carrot.jpeg", availability: true, cost: 27.23, type: "vegetable",},
        {id:5, name: "Морковь Греческая", description: "Морковь Витаминная", imageName: "carrot.jpeg", availability: false, cost: 87.23, type: "fruit",},
        {id:6, name: "Морковь", description: "Морковь Витаминная", imageName: "carrot.jpeg", availability: true, cost: 27.23, type: "vegetable",},
        {id:7, name: "Морковь Греческая", description: "Морковь Витаминная", imageName: "carrot.jpeg", availability: false, cost: 87.23, type: "fruit",},
        {id:8, name: "Морковь", description: "Морковь Витаминная", imageName: "carrot.jpeg", availability: true, cost: 27.23, type: "vegetable",},
    ])
    const [pages, setPages] = useState([
        {id:"catalog", name:"Каталог", active: true},
        {id:"stores", name:"Магазины", active: false},
        {id:"discounts", name:"Скидки", active: false},

    ]);
    const [searchQuery, setSearchQuery] = useState('')

    function changeBasketCount(){
        setCount(productBusket.reduce((sum,p)=>sum+p.count,0))
    }

    useEffect(()=>{
        changeBasketCount()
    },[productBusket])

    function changeProductBusket(productID, count){
        if (productBusket.find(x=>x.id===productID)){
            if(count===0){
                setProductBusket([...productBusket.filter(p=>p.id!==productID)].sort((a,b)=>{return a.id-b.id}))
            }else{
                setProductBusket([...productBusket.filter(p=>p.id!==productID), {id:productID, count:count}].sort((a,b)=>{return a.id-b.id}))
            }
        } else{
            setProductBusket([...productBusket, {id:productID, count:count}].sort((a,b)=>{return a.id-b.id}))
        }
    }

    return (
    <div className="App">
        <Header pages = {pages} searchQuery={searchQuery}/>
        <div id="catalog">
            <ModalBusket visible={modal} setVisible={setModal} productBusket={productBusket} products = {products} changeProductBusket = {changeProductBusket}/>
            <div id="field">
                <div id="filter">
                    <Search/>
                </div>
                <ProductList busket = {changeProductBusket} productBusket = {productBusket} products = {products}/>
            </div>
            <BusketItem modal = {()=> setModal(true)} busketCount = {busketCount}/>
        </div>
    </div>
  );
}

export default App;
