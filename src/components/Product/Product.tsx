import productList from '../../MockData/product.json'
import { product as productInfo } from '../Home/Home'

function Product()
{
    const product :productInfo = productList.filter((e) => e.productId == window.location.search.substring(1))[0]
    return(
        <>
        <div>        
        {product.productName}:
        <img alt="Image failed to load" src={product.imageUrl}></img>
        <div>Product Details</div>
        <div>Size     : {product.productPrice}</div>
        <div>Material : {product.material}</div>
        <div>Price    : {product.productPrice}</div>
        </div>                
        </>
    )
}


export default Product