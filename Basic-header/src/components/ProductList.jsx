/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard.jsx";

function ProductList({ ListofProduct }) {
  return (
    <div className="product-container">
      {ListofProduct.map((product, index) => (
        <ProductCard
          productTitle={product.title}
          productDesc={product.description}
          productPrice={product.price}
          key={index}
        />
      ))}
    </div>
  );
}

export default ProductList;
