import React, {useState} from 'react';
import ProductList from "./components/ProductList";
import './styles/App.css'
import Header from "./components/Header";
import BusketItem from "./components/BusketItem";
import ModalBusket from "./components/UI/modal/ModalBusket";
import BusketModalItem from "./components/BusketModalItem";
import ProductItem from "./components/ProductItem";
function App() {
    const [busketCount,setCount] = useState(0);
    const [modal, setModal] = useState(false);
    const [productBusket, setProductBusket] = useState([])
    const [products, setProducts] = useState([
        {id:1, name: "Молоко", description: "Пастеризованное молоко", imageName: "milk.jpg", availability: true,},
        {id:2, name: "Яблоко", description: "Яблоко Golden", imageName: "apple.jpg", availability: true,},
        {id:3, name: "Морковь", description: "Морковь Витаминная", imageName: "carrot.jpeg", availability: false,},
        {id:4, name: "Морковь", description: "Морковь Витаминная", imageName: "carrot.jpeg", availability: true,},
    ])


    function increment(){

        setCount(busketCount+1)
    }

    function changeProductBusket(productID){

        if (productBusket.filter(p=>p.id===productID).length>0){
            let count = productBusket.find(x=>x.id===productID).count
            setProductBusket([...productBusket.filter(p=>p.id!==productID), {id:productID, count:count+1}])
        } else{
            setProductBusket([...productBusket, {id:productID, count:1}])
        }

        increment()
    }



    return (
    <div className="App">

        <ModalBusket visible={modal} setVisible={setModal}>
            <h1>Корзина</h1>
            <div>
                {productBusket.length > 0
                    ? productBusket.map(product => {return <BusketModalItem key={product.id} imageName={products.find(x=>x.id===product.id).imageName} name={products.find(x=>x.id===product.id).name} id={product.id} value={product.count}/>;})
                    :<h1>Корзина пуста</h1>
                }
            </div>

        </ModalBusket>
        <Header/>
        <ProductList busket={changeProductBusket} products={products}/>
        <BusketItem modal={()=> setModal(true)} busketCount = {busketCount}/>
    </div>
  );
}

export default App;
