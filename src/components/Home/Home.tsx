import productJson from "../../MockData/product.json";
import "./Home.css";

function Home() {
  let productList: product[] = productJson;
  const filterJson = sessionStorage.getItem("employee");
  if (filterJson != null && filterJson != "") {
    const filter = JSON.parse(filterJson)["filter"];
    const [field, operation, value] = filter!.split(" ");
    const filterValue: filterValues = {
      field: field,
      operation: operation,
      value: value,
    };
    productList = processFilter(filterValue, productList);
  }
  //productList = productList.filter((e) =>);
  return (
    <>
      <div className="flex wrap center">
        {productList.map((e) => {
          const temp = "./product?" + e.productId;
          return (
            <div className="flex center">
              <div className="flex flexcolumn center padding">
                <a className="textalign bolder" href={temp}>
                  {e.productName}
                </a>
                <img
                  className="img self-center"
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
  [key: string]: any;
  productId: string;
  productName: string;
  imageUrl: string;
  productPrice: number;
  size: number;
  material: string;
}

interface filterValues {
  field: any;
  operation: string;
  value: string;
}
function processFilter(filter: filterValues, products: product[]) {
  switch (filter.operation) {
    case ">":
      return products.filter((e) => e[filter.field] > filter.value);
    case "<":
      return products.filter((e) => e[filter.field] < filter.value);
    case "=":
      return products.filter((e) => e[filter.field] === filter.value);
  }
  return products;
}
