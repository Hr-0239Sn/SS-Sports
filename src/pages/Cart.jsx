import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
     {
      id: 1,
      name: "Professional Soccer Ball",
      price: 49.99,
      image: "/images/soccer ball 1.jpg",
      quantity: 1
    }
    // Add more items as needed
  ]);
  

  const shippingCost = 5.99;
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + shippingCost;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <section className="shopping-cart">
      <div className="container">
        <h1>Your Shopping Cart</h1>
        
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="item-price">${item.price.toFixed(2)}</div>
                  <div className="item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </div>
            ))
          ) : (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <Link to="/products" className="continue-shopping">Continue Shopping</Link>
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <Link to="/products" className="continue-shopping">Continue Shopping</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;