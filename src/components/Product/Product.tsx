import productList from "../../MockData/product.json";
import { product as productInfo } from "../Home/Home";
import "./Product.css";

function Product() {
  const product: productInfo = productList.filter(
    (e) => e.productId == window.location.search.substring(1)
  )[0];
  return (
    <>
      <div className="flex flexcolumn textalign bolder">
        <div className="bolder font">{product.productName}</div>
        <div className="flex">
          <img
            className="margin-left-50"
            alt="Image failed to load"
            src={product.imageUrl}
          ></img>
          <div className="flex flexcolumn textalign-left margin-left-50">
            <div className="bolder font-20 margin-bottom-10">
              Product Details:
            </div>
            <div className="flex">
              <div>
                Size
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
              </div>
              <div className="color3"> {product.size}</div>
            </div>
            <div className="flex">
              <div>Material &nbsp;:&nbsp;</div>
              <div className="color3"> {product.material}</div>
            </div>
            <div className="flex">
              <div>Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</div>
              <div className="color3">{product.productPrice + " Rs"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
