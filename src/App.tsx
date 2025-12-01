
import './App.css'
import { useState } from 'react'
import NavBar from './Components/NavBar'
import Contact from './Components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Home Section Component
  const HomeSection = () => (
    <section id="home" className="section">
      <div className="hero">
        <h1>CodeFore Solutions</h1>
        <p>Turning ideas into reality through innovative technology solutions.</p>
        <div className="hero-buttons">
          <button onClick={() => setActiveSection('services')}>Our Services</button>
          <button onClick={() => setActiveSection('contact')}>Get Started</button>
        </div>
      </div>
      <div className="portfolio">
        <h2>Our Partners</h2>
        <h4>Panepucci Repair and Services</h4>
        <img src="../src/assets/panepucciSR.png" alt="Image of Panepucci Service and Repair logo" width="60%" />
        <h4>Eaton Golf</h4>
        <img src="PLACEHOLDER EATON GOLF" alt='Image of Eaton Golf logo' width="60%" />
      </div>
    </section>
  )

  // About Section Component
  const AboutSection = () => (
    <section id="about" className="section">
      <div className="container">
        <h2>About CodeFore Solutions</h2>
        <p>
          We are a technology solutions company dedicated to helping businesses leverage the power of web development, data analytics, and artificial intelligence. 
          Our mission is to provide innovative and customized solutions that drive growth and efficiency for our clients.
          We strive to bring modern design to small businesses while maintaining affordability and quality.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Web Development</h3>
            <p>Our engineers specialize in creating responsive, user-friendly websites tailored to your business needs.</p>
          </div>
          <div className="about-card">
            <h3>Data Analytics</h3>
            <p>We provide comprehensive data analysis services to help you make informed business decisions and optimize performance.</p>
          </div>
          <div className="about-card">
            <h3>Artificial Intelligence</h3>
            <p>Our AI solutions automate processes and provide predictive insights to drive innovation and efficiency.</p>
          </div>
          <div className="about-card">
            <h3>Custom Work</h3>
            <p>We offer tailored technology solutions to meet your unique business challenges, ensuring seamless integration and ongoing support.</p>
          </div>
          <h2>Our Development Team</h2>
          <div className="dev-team-image">
            <h3>Brad</h3>
            <img src="../src/assets/devTeam.png" alt="Brad headshot photo" />
            <h3>Stacy</h3>
            <img src="../src/assets/devTeam2.png" alt="Stacy headshot photo" />
            <h3>Dylan</h3>
            <img src="../src/assets/devTeam3.png" alt="Dylan headshot photo" />
          </div>
        </div>
      </div>
    </section>
  )

  // Services Section Component
  const ServicesSection = () => (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Tier 1: Web Development</h3>
            <p>Enhance your online presence with a professional website tailored to your needs.</p>
            <ul>
              <li>Custom website design and development</li>
              <li>Responsive and mobile-friendly layouts</li>
              <li>SEO optimization</li>
              <li>Content management system integration</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Tier 2: Web Dev & Analytics</h3>
            <p>System reporting and data analysis to drive informed business decisions.</p>
            <ul>
              <li>Data visualization and dashboard creation</li>
              <li>Performance tracking and metrics analysis</li>
              <li>Custom report generation</li>
              <li>Organized data for easy access and interpretation</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Tier 3: Web Dev, Analytics & AI</h3>
            <p>Leverage artificial intelligence to automate processes and gain deeper insights.</p>
            <ul>
              <li>AI-driven process automation</li>
              <li>Predictive analytics and forecasting</li>
              <li>Smooth integration with existing systems</li>
              <li>Machine learning model development and deployment</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Custom Solutions</h3>
            <p>Tailored technology solutions to meet your unique business challenges.</p>
            <ul>
              <li>Consultation to understand your needs</li>
              <li>Custom software development</li>
              <li>Integration with existing tools and platforms</li>
              <li>Ongoing support and maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )

  // Function to render the active section
  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection />
      case 'about':
        return <AboutSection />
      case 'services':
        return <ServicesSection />
      case 'contact':
        return <Contact />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="app">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  )
}

export default App;

