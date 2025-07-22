import { useState } from 'react';
import '../../src/App.css';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('Size 5 (Adult)');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('/images/soccer ball large.jpg');

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${selectedSize} soccer ball(s) to cart!`);
  };

  const thumbnails = [
    { src: '/images/soccer ball 1.jpg', alt: 'Soccer Ball Angle 1' },
    { src: '/images/soccer ball 2.jpg', alt: 'Soccer Ball Angle 2' }
  ];

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : Math.max(1, value));
  };

  return (
    <>
      <section className="product-detail">
        <div className="container">
          <div className="product-images">
            <div className="main-image">
              <img src={mainImage} alt="Professional Soccer Ball" id="main-image" />
            </div>
            <div className="thumbnail-gallery">
              {thumbnails.map((thumb, index) => (
                <img 
                  key={index}
                  src={thumb.src}
                  alt={thumb.alt}
                  onClick={() => setMainImage(thumb.src)}
                  className={mainImage === thumb.src ? 'active' : ''}
                />
              ))}
            </div>
          </div>
          
          <div className="product-info">
            <h1>Professional Soccer Ball</h1>
            <div className="product-rating">★★★★☆ (24 reviews)</div>
            <div className="product-price">$49.99</div>
            
            <div className="product-description">
              <p>Official size and weight FIFA approved soccer ball. Perfect for professional matches and training.</p>
              <ul>
                <li>100% synthetic leather</li>
                <li>Hand-stitched for durability</li>
                <li>Water-resistant technology</li>
              </ul>
            </div>
            
            <div className="product-options">
              <label htmlFor="size">Size:</label>
              <select 
                id="size" 
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option>Size 3 (Youth)</option>
                <option>Size 4 (Junior)</option>
                <option>Size 5 (Adult)</option>
              </select>
              
              <label htmlFor="quantity">Quantity:</label>
              <input 
                type="number" 
                id="quantity" 
                min="1" 
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="product-reviews">
        {/* Reviews section would go here */}
      </section>
    </>
  );
};

export default ProductDetail;