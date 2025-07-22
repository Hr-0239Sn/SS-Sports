import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import '../../src/App.css';

const Header = () => {
  const { cartCount } = useContext(CartContext);

  // Array of navigation items
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/products", name: "Shop" },
    { path: "/categories", name: "Categories" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" }
  ];

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">SS Sports</NavLink>
        </div>
        <nav className="main-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cart-icon">
          <NavLink to="/cart">
            🛒 <span className="cart-count">{cartCount}</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;