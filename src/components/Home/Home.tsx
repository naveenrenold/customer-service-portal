import productJson from "../../MockData/product.json";

function Home() {
  let productList: product[] = productJson;
  const filter = sessionStorage.getItem('filter');
  productList = productList.filter((e) =>);
  return (
    <>
      <div>
        {productList.map((e) => {
          const temp = "./product?" + e.productId;
          return (
            <div>
              <a href={temp}>{e.productName}</a>
              <img alt="Image failed to load" src={e.imageUrl}></img>
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


