import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} />
          {!product.inStock && (
            <span className="out-of-stock-badge">Out of Stock</span>
          )}
        </div>
         <h3>{product.name}</h3>
        <div className="product-price">Rs{product.price.toFixed(2)}</div>
       <div className="product-rating">
           {Array(5).fill().map((_, i) => (
            <span key={i}>
              {i < Math.floor(product.rating) ? '★' : '☆'}
            </span>
          ))}
          <span className="rating-value">({product.rating})</span>
        </div>
      </Link>
      <button 
        className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
        onClick={() => product.inStock && onAddToCart()}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default ProductCard;