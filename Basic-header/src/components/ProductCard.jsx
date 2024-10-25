import PropTypes from "prop-types";

function ProductCard({ productTitle, productDesc, productPrice }) {
  return (
    <div className="product-card">
      <img />
      <h2>{productTitle}</h2>
      <p>{productDesc}</p>
      <h2>${productPrice}</h2>
    </div>
  );
}

ProductCard.propTypes = {
  productTitle: PropTypes.string.isRequired,
  productDesc: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default ProductCard;
