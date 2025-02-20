import productJson from "../../MockData/product.json";
import "./Home.css";

function Home() {
  let productList: product[] = productJson;
  return (
    <>
      <div className="flex wrap center">
        {productList.map((e) => {
          return (
            <div className="flex center">
              <div className="flex flexcolumm center">
                <div className="textalign">{e.productName}</div>
                <img
                  className="img"
                  alt="Image failed to load"
                  src={e.imageUrl}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;

interface product {
  productName: string;
  imageUrl: string;
}
