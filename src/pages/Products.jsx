import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../../src/App.css';

const Products = () => {
  // Product data in object form
  const productData = {
    products: [
      {
        id: 1,
        name: "Professional Soccer Ball",
        price: 49.99,
        category: "soccer",
        image: "/images/soccer ball 2.jpg",
        rating: 4.5
      },
      {
        id: 2,
        name: "Basketball Hoop",
        price: 199.99,
        category: "basketball",
        image: "/images/Basketball Hoop.jpg",
        rating: 4.8
      },
    ],
    categories: [
      { value: "all", label: "All Categories" },
      { value: "soccer", label: "Soccer" },
      { value: "basketball", label: "Basketball" },
      { value: "fitness", label: "Fitness" },
      { value: "outdoor", label: "Outdoor" }
    ],
    priceRanges: [
      { value: "all", label: "All Prices" },
      { value: "0-50", label: "Rs0 - Rs50" },
      { value: "50-100", label: "Rs50 - Rs100" },
      { value: "250-500", label: "Rs250 - Rs500" },
      { value: "500-1000", label: "Rs500 - Rs1000" }
    ]
  };

  const [products] = useState(productData.products);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = [...products];
    
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }
    
    setFilteredProducts(filtered);
  }, [categoryFilter, priceFilter, products]);

  return (
    <div className="products-page">
      <section className="products-section">
        <div className="container">
          <div className="filters">
            <select 
              id="category-filter"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {productData.categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <select 
              id="price-filter"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              {productData.priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="no-products">No products found matching your criteria.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;