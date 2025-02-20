import productJson from "../../MockData/product.json";
import "./Home.css";

function Home() {
  let productList: product[] = productJson;
  const filter = sessionStorage.getItem('filter');
  productList = productList.filter((e) =>);
  return (
    <>
      <div className="flex wrap center">
        {productList.map((e) => {
          const temp = "./product?" + e.productId;
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

export interface product {
  [key: string] :any; 
  productId : string;
  productName: string;
  imageUrl: string;
  productPrice : number;
  size : number;
  material : string;
}

interface filterValues{
  field : any
  operation : string
  value :string
}
function processFilter(filter :filterValues, products :product[])
{  
  switch(filter.operation){
    case ">":
      return products.filter((e) => e[filter.field] > filter.value)
      break;
      case "<":
        return products.filter((e) => e[filter.field] < filter.value)
        break;
        case "=":
      return products.filter((e) => e[filter.field] === filter.value)
      break;
}
}


