import { Link } from 'react-router-dom';
import '../../src/App.css'; // Create this CSS file

const HomeSections = () => {
  // Category data
  const categories = [
    {
      id: 1,
      name: "Soccer",
      image: "/images/soccer.jpg",
      link: "/products?category=soccer"
    },
    {
      id: 2,
      name: "Basketball",
      image: "/images/basketball.jpg",
      link: "/products?category=basketball"
    },
    // Add more categories as needed
    {
      id: 3,
      name: "Fitness",
      image: "/images/yoga mat.jpg",
      link: "/products?category=fitness"
    },
    {
      id: 4,
      name: "Running",
      image: "/images/shoes.jpg",
      link: "/products?category=running"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <h1>Gear Up For Victory</h1>
          <p>Premium sports equipment for athletes of all levels</p>
          <Link to="/products" className="btn">Shop Now</Link>  
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="featured-categories">
        <div className="container">
         {<h2>Shop By Sport</h2>}         
           <div className="category-grid">
            {categories.map((category) => (
              <Link 
                to={category.link} 
                className="category-card" 
                key={category.id}
              >
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSections;