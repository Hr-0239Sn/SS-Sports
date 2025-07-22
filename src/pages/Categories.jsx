import { Link } from 'react-router-dom';
import '../../src/App.css';

const Categories = () => {
  const categories = [
    {
      name: "Soccer",
      image: "images/Soccer1.jpg",
      description: "Balls, cleats, jerseys, and all soccer equipment",
      category: "soccer"
    },
    {
      name: "Basketball",
      image: "/images/basketball.jpg",
      description: "Balls, hoops, shoes, and basketball gear",
      category: "basketball"
    },
    {
      name: "Fitness",
      image: "/images/yoga mat.jpg",
      description: "Weights, mats, accessories for your workout",
      category: "fitness"
    },
    {
      name: "Running",
      image: "/images/shoes.jpg",
      description: "Running shoes, apparel, and accessories",
      category: "running"
    },
    {
      name: "Outdoor Sports",
      image: "/images/outdoor.jpg",
      description: "Camping, hiking, and adventure gear",
      category: "outdoor"
    }
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <h1>Shop by Category</h1>
        
        <div className="all-categories">
          {categories.map((category, index) => (
            <div className="category-large" key={index}>
              <img src={category.image} alt={category.name} />
              <div className="category-content">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <Link 
                  to={`/products?category=${category.category}`} 
                  className="btn"
                >
                  Shop {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;