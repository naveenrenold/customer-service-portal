import productJson from "../../MockData/product.json";

function Home() {
  let productList: product[] = productJson;
  return (
    <>
      <div>
        {productList.map((e) => {
          return (
            <div>
              <div>{e.productName}</div>
              <img alt="Image failed to load" src={e.imageUrl}></img>
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
