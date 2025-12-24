import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Welcome to the Grind: ${email}`);
    setEmail("");
  };

  return (
    <div className="App">
      {/* NAVIGATION */}
      <nav className="navbar">
        <h1 style={{color: 'var(--neon)'}}>NSG</h1>
        <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} style={{fontSize: '1.5rem', cursor: 'pointer'}}>
          {menuOpen ? '✕' : '☰'}
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>HOME</a></li>
          <li><a href="#kgmac" onClick={() => setMenuOpen(false)}>KGMAC</a></li>
          <li><a href="#newsletter" onClick={() => setMenuOpen(false)}>BLOG</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section id="home">
        <h2 style={{fontSize: '4rem'}}>NON STOP GRIND</h2>
        <p>THE LABEL. THE MOVEMENT. THE GRIND.</p>
      </section>

      {/* ARTIST SECTION: KGMAC */}
      <section id="kgmac" style={{background: 'var(--dark-grey)'}}>
        <h2 style={{fontSize: '3rem'}}>FEATURED ARTIST: KGMAC</h2>
        <div style={{border: '4px solid var(--neon)', maxWidth: '500px', height: '300px', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
           <p>[ KGMAC IMAGE HERE ]</p>
        </div>
        <p>KGMAC is setting the pace for NSG Records. Stream the latest hits now.</p>
        <button className="btn" style={{marginTop: '20px'}}>Listen Now</button>
      </section>

      {/* BLOG / NEWSLETTER SECTION */}
      <section id="newsletter">
        <h2>NSG NEWSLETTER & BLOG</h2>
        <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
          <article style={{borderLeft: '4px solid var(--neon)', paddingLeft: '20px', marginBottom: '40px'}}>
            <h3>KGMAC Takes Over the City</h3>
            <p style={{fontSize: '0.9rem', color: '#888'}}>Posted: Dec 24, 2025</p>
            <p>Non Stop Grind is proud to announce the latest tour dates for KGMAC...</p>
          </article>
        </div>

        {/* SUBSCRIBE FORM */}
        <div style={{marginTop: '50px', border: '1px solid var(--neon)', padding: '40px'}}>
          <h3>JOIN THE INNER CIRCLE</h3>
          <p>Get exclusive KGMAC updates delivered to your inbox.</p>
          <form onSubmit={handleSubscribe} style={{marginTop: '20px'}}>
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn">Join</button>
          </form>
        </div>
      </section>

      <footer style={{padding: '20px', fontSize: '0.8rem', opacity: 0.7}}>
        © 2025 NON STOP GRIND (NSG). ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}

export default App;
