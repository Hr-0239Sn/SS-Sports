import '../../src/App.css';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Keyur Govrani",
      position: "Founder & CEO",
      role: "Fitness Trainer",
      image: "/images/Screenshot 2025-07-17 173933.png"
    },
    {
      id: 2,
      name: "Harsh Singh",
      position: "Head of Product",
      role: "Fitness coach and equipment specialist",
      image: "/images/Screenshot 2025-07-17 173857.png"
    },
    {
      id: 3,
      name: "Abhinav Raijada",
      position: "Customer Experience",
      role: "Basketball enthusiast and former coach",
      image: "/images/Screenshot 2025-07-17 173959.png"
    }
  ];

  // Company values data
  const companyValues = [
    { id: 1, name: "Integrity", description: "We stand behind every product we sell" },
    { id: 2, name: "Expertise", description: "Our team knows sports inside and out" },
    { id: 3, name: "Community", description: "We support local teams and athletes" },
    { id: 4, name: "Innovation", description: "We're always looking for the next game-changing gear" }
  ];

  return (
    <section className="about-page">
      <div className="container">
        <h1>Our Story</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Passion for Sports, Commitment to Quality</h2>
            <p>Founded in 2025, SportZone began as a small local sports shop with a big dream: to provide athletes of all levels with top-quality equipment at affordable prices. What started as a single store has grown into one of the leading online sports retailers in the country.</p>
            
            <p>Our team consists of former athletes, coaches, and sports enthusiasts who understand exactly what you need to perform at your best. We test every product we sell to ensure it meets our high standards for quality and performance.</p>
            
            <h2>Our Mission</h2>
            <p>To inspire and equip athletes at every stage of their journey by providing premium sports gear, expert advice, and outstanding customer service.</p>
            
            <h2>Our Values</h2>
            <ul className="values-list">
              {companyValues.map(value => (
                <li key={value.id}>
                  <strong>{value.name}:</strong> {value.description}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="about-image">
            {/* Uncomment when you have the image */}
            {/* <img src="/images/sports-zone-team.jpg" alt="SportZone Team" /> */}
          </div>
        </div>
        
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-member" key={member.id}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;