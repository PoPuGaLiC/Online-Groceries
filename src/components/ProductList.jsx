import ProductItem from "./ProductItem";
import "../styles/ProductList.css"
const ProductList = ({busket, ...props}) => {
    if(props.products.length === 0){
        return(
            <h1>Продукты не найдены</h1>
        )
    }
    return (
        <div className = 'ProductList'>
            {props.products.map((product) => {
                return <ProductItem busket = {busket}
                                    productBusket = {props.productBusket}
                                    key = {product.id}
                                    id = {product.id}
                                    product = {product}
                />
            })}
        </div>
    );
};

export default ProductList;