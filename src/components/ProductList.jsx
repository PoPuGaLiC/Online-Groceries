import ProductItem from "./ProductItem";
import "../styles/ProductList.css"
import { useSelector } from 'react-redux'
const ProductList = () => {
    let getProductData = () => {
        return new Promise(function (resolve, reject) {
          let fakeApiResponceTime = Math.random() * 1000 + 200;
          setTimeout(() => {
            Math.random() < 0.2
              ? reject(new Error('some fake network error, sorry'))
              : resolve(
                JSON.stringify({
                 data:[{"id":1, "name": "Молоко 2,5%", "description": "Пастеризованное молоко", "imageName": "milk.jpg", "availability": true, "cost": 34.56, "type": "milk"},
                    {"id":2, "name": "Яблоко", "description": "Яблоко Golden", "imageName": "apple.jpg", "availability": true, "cost": 32.67, "type": "fruit"},
                    {"id":3, "name": "Морковь Очищенная", "description": "Морковь Витаминная", "imageName": "carrot.jpeg", "availability": false, "cost": 57.23, "type": "vegetable"},
                    {"id":4, "name": "Морковь", "description": "Морковь Витаминная", "imageName": "carrot.jpeg", "availability": true, "cost": 17.27, "type": "vegetable"},
                    {"id":5, "name": "Молоко 3,2%", "description": "Пастеризованное молоко", "imageName": "milk.jpg", "availability": true, "cost": 74.36, "type": "milk"},
                    {"id":6, "name": "Яблоко Голден", "description": "Яблоко Golden", "imageName": "apple.jpg", "availability": false, "cost": 72.67, "type": "fruit"},
                    {"id":7, "name": "Морковь Греческая", "description": "Морковь Витаминная", "imageName": "carrot.jpeg", "availability": true, "cost": 129.24, "type": "vegetable"},
                    {"id":8, "name": "Морковь Салатная", "description": "Морковь Витаминная", "imageName": "carrot.jpeg", "availability": true, "cost": 11.23, "type": "vegetable"},
                    {"id":9, "name": "Морковь", "description": "Морковь Витаминная", "imageName": "carrot.jpeg", "availability": true, "cost": 17.27, "type": "vegetable"},
                    {"id":10, "name": "Молоко 3,2%", "description": "Пастеризованное молоко", "imageName": "milk.jpg", "availability": true, "cost": 55.36, "type": "milk"},
                    {"id":11, "name": "Яблоко Голден", "description": "Яблоко Golden", "imageName": "apple.jpg", "availability": false, "cost": 12.67, "type": "fruit"},
                    {"id":12, "name": "Морковь Греческая", "description": "Морковь Витаминная", "imageName": "carrot.jpeg", "availability": true, "cost": 49.24, "type": "vegetable"}]
                })
              );
          }, fakeApiResponceTime);
        });
      };
    const products = useSelector(state => state.catalog.data)
    const filter = useSelector(state => state.catalog.filter)

    function sorting(sort_type, a, b) {
        switch (sort_type) {
            case 'name-start':
                return a.name < b.name ? -1 : 1
            case 'name-end':
                return a.name > b.name ? -1 : 1
            case 'price-start':
                return a.cost < b.cost ? -1 : 1
            case 'price-end':
                return a.cost > b.cost ? -1 : 1
        }
    }

    if (products.length === 0) {
        return (
            <h1>Продукты не найдены</h1>
        )
    }
    return (
        <div className='ProductList'>
            {products.filter(el => {
                return el.name.toLowerCase().includes(filter.search)
            }).filter(el => {
                return filter.types.includes(el.type)
            }).filter(el => {
                return (filter.price.min < el.cost && el.cost < filter.price.max)
            }).sort((a, b) => sorting(filter.sort, a, b))
                .map((product) => {
                    return <ProductItem
                        key={product.id}
                        id={product.id}
                        product={product}
                    />
                })}
        </div>
    );
};

export default ProductList;