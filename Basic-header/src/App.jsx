import ProductList from "./ProductList";
import ProductData from "./ProductData.js";


function App() {
  

  // const ProductData = [
  //   {
  //       title : "Gucci Bag",
  //       description : "Top leather bag, aliggator skin",
  //       price : 13
  //   },
  //   {
  //       title : "Gucci Bag",
  //       description : "Top leather bag, aliggator skin",
  //       price : 13
  //   },
  //   {
  //       title : "Gucci Bag",
  //       description : "Top leather bag, aliggator skin",
  //       price : 13
  //   },
  //   {
  //       title : "Gucci Bag",
  //       description : "Top leather bag, aliggator skin",
  //       price : 13
  //   },

  // ]

  return <div>
    <ProductList
      ListofProduct = {ProductData}
    />
  </div>;
}

export default App;
