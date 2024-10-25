import ProductList from "./components/ProductList.jsx";
import ProductData from "./components/ProductData.js";
import BasicHeader from "./components/BasicHeader.jsx";

function App() {
  return (
    <div>
      <ProductList ListofProduct={ProductData} />

      {/* <BasicHeader title="Basic Header Component" /> */}
    </div>
  );
}

export default App;
