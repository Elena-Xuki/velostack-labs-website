import React from 'react';
import { Layers, MonitorPlay, Code2, Database, Rocket, ArrowRight, Zap } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      
      {/* Navigation */}
      <nav className="navbar glass-panel">
        <div className="nav-brand">
          <Layers className="brand-icon" size={28} />
          <span>VELOSTACK LABS</span>
        </div>
        <div className="nav-links">
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#work" className="nav-link">Our Work</a>
        </div>
        <button className="btn-primary">
          Contact Us <ArrowRight size={16} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <h1>
          Engineering the <span className="text-gradient">Next Generation</span> of Software.
        </h1>
        <p>
          Velostack Labs is a premier custom software development firm outfitting visionary 
          enterprises with scalable, high-performance digital infrastructure.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Start a Project <Rocket size={18} />
          </button>
          <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Explore Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h2>Core Capabilities</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>End-to-end technical solutions designed for scale.</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card glass-panel">
            <div className="service-icon-wrapper">
              <Code2 size={28} color="var(--color-accent-blue)" />
            </div>
            <h3>Custom Applications</h3>
            <p>
              Bespoke web and mobile applications engineered with modern stacks (React, Node, Go) 
              for optimal performance and user experience.
            </p>
          </div>
          
          <div className="service-card glass-panel">
            <div className="service-icon-wrapper">
              <Database size={28} color="var(--color-accent-purple)" />
            </div>
            <h3>Cloud Architecture</h3>
            <p>
              Resilient, scalable cloud infrastructure design and deployment using AWS, GCP, 
              and Firebase optimizations.
            </p>
          </div>
          
          <div className="service-card glass-panel">
            <div className="service-icon-wrapper">
              <Zap size={28} color="var(--color-accent-teal)" />
            </div>
            <h3>System Integration</h3>
            <p>
              Seamless integration of complex legacy systems with modern API gateways, 
              microservices, and third-party platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer glass-panel">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="nav-brand">
              <Layers className="brand-icon" size={24} />
              <span>VELOSTACK LABS LLC</span>
            </div>
            <p>Engineering premium digital solutions for the modern enterprise.</p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              <a href="mailto:velostacklabsllc@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                velostacklabsllc@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Velostack Labs LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
