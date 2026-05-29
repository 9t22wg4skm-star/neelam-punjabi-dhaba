import { useState } from 'react'
import './App.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
]

const menuSections = [
  {
    title: 'Starters',
    items: [
      { name: 'Paneer Tikka', price: '₹240' },
      { name: 'Amritsari Fish', price: '₹320' },
      { name: 'Hara Bhara Kebab', price: '₹210' },
    ],
  },
  {
    title: 'Punjabi Main Course',
    items: [
      { name: 'Chole Bhature', price: '₹220' },
      { name: 'Butter Chicken', price: '₹360' },
      { name: 'Sarson da Saag', price: '₹260' },
    ],
  },
  {
    title: 'Tandoori Specials',
    items: [
      { name: 'Tandoori Chicken', price: '₹380' },
      { name: 'Seekh Kebab', price: '₹330' },
      { name: 'Paneer Angara', price: '₹300' },
    ],
  },
  {
    title: 'Dal & Curry',
    items: [
      { name: 'Dal Makhani', price: '₹220' },
      { name: 'Rajma Masala', price: '₹200' },
      { name: 'Paneer Butter Masala', price: '₹320' },
    ],
  },
  {
    title: 'Breads',
    items: [
      { name: 'Tandoori Roti', price: '₹40' },
      { name: 'Butter Naan', price: '₹60' },
      { name: 'Amritsari Kulcha', price: '₹120' },
    ],
  },
  {
    title: 'Rice',
    items: [
      { name: 'Jeera Rice', price: '₹140' },
      { name: 'Paneer Pulao', price: '₹220' },
      { name: 'Punjabi Biryani', price: '₹350' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Gulab Jamun', price: '₹120' },
      { name: 'Ras Malai', price: '₹140' },
      { name: 'Gajar Halwa', price: '₹160' },
    ],
  },
  {
    title: 'Beverages',
    items: [
      { name: 'Sweet Lassi', price: '₹110' },
      { name: 'Masala Chai', price: '₹70' },
      { name: 'Badam Milk', price: '₹160' },
    ],
  },
]

const featuredDishes = [
  {
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils with rich butter and cream.',
    image:
      'https://images.unsplash.com/photo-1604908177522-105aa7a9a319?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Paneer Butter Masala',
    description: 'Velvety paneer in a fragrant tomato-spice gravy.',
    image:
      'https://images.unsplash.com/photo-1604908177777-8acb1b7a4f8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Amritsari Kulcha',
    description: 'Flaky stuffed bread with chutney and pickle.',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Punjabi Thali',
    description: 'A royal platter of curries, dal, rice, and sides.',
    image:
      'https://images.unsplash.com/photo-1611020087708-9bc2bbadbc55?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tandoori Roti',
    description: 'Charred, hand-rolled flatbread from the tandoor.',
    image:
      'https://images.unsplash.com/photo-1603072814810-1d25f2ee07fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sweet Lassi',
    description: 'Creamy saffron lassi topped with pistachios.',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1498575207492-0bab2a998a49?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1576402187878-81a2b0fb34cd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512058564366-c9e5f7214a09?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1604908554077-82c680d2ec86?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80',
]

const testimonials = [
  {
    quote:
      'A royal dining experience that brings authentic Punjabi hospitality to every plate.',
    author: 'Anjali Sharma',
    details: 'Family dinner, Udaipur',
  },
  {
    quote:
      'The flavour is rich, the service is refined, and the ambience feels like luxury.',
    author: 'Rohan Mehta',
    details: 'Couple lunch',
  },
  {
    quote:
      'Perfect balance of spice and comfort. Every visit feels memorable.',
    author: 'Priya Singh',
    details: 'Weekend celebration',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="brand">
          <div className="brand-mark">N</div>
          <div>
            <p className="brand-name">Neelam Punjabi Dhaba</p>
            <p className="brand-subtitle">नीलम पंजाबी ढाबा</p>
          </div>
        </div>
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-primary" href="#contact">
          Order Online
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="hero-copy">
            <p className="hero-subtitle">Authentic Punjabi Taste in the Heart of Udaipur</p>
            <h1>Neelam Punjabi Dhaba</h1>
            <p className="hero-hindi">नीलम पंजाबी ढाबा</p>
            <p className="hero-description">
              Experience premium Punjabi cuisine in a luxurious environment with curated flavours and rich hospitality.
            </p>
            <div className="hero-meta">
              <div>
                <span>Rating</span>
                <strong>4.5 ★</strong>
              </div>
              <div>
                <span>Reviews</span>
                <strong>474</strong>
              </div>
              <div>
                <span>Price</span>
                <strong>₹200–₹400</strong>
              </div>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#menu">
                View Menu
              </a>
              <a className="button button-secondary" href="#contact">
                Order Online
              </a>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="trust-card">
            <strong>4.5</strong>
            <p>Star Rating</p>
          </div>
          <div className="trust-card">
            <strong>474</strong>
            <p>Customer Reviews</p>
          </div>
          <div className="trust-card">
            <strong>Authentic</strong>
            <p>Punjabi Cuisine</p>
          </div>
          <div className="trust-card">
            <strong>Family</strong>
            <p>Friendly Dining</p>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-intro">
            <p className="eyebrow">About Us</p>
            <h2>Where Heritage Meets Premium Punjabi Dining</h2>
            <p>
              Neelam Punjabi Dhaba brings the authentic warmth of Punjabi culinary tradition to Udaipur, with premium ingredients,
              chef-led dishes, and a rich atmosphere designed for celebration.
            </p>
          </div>
          <div className="about-grid">
            <div className="feature-card">
              <h3>Traditional Recipes</h3>
              <p>Our kitchen preserves time-honoured Punjabi flavours with every handcrafted dish.</p>
            </div>
            <div className="feature-card">
              <h3>Fresh Ingredients</h3>
              <p>We source premium produce, spices, and dairy daily to ensure every bite is vibrant and rich.</p>
            </div>
            <div className="feature-card">
              <h3>Elevated Hospitality</h3>
              <p>From the moment you arrive, we deliver refined service and warm hospitality.</p>
            </div>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-intro">
            <p className="eyebrow">Menu</p>
            <h2>Curated Punjabi Classics for Every Appetite</h2>
            <p>
              Explore our premium menu, from warming dal and tandoori highlights to traditional breads, desserts, and beverages.
            </p>
          </div>

          <div className="menu-grid">
            {menuSections.map((section) => (
              <article className="menu-card" key={section.title}>
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="featured-section">
          <div className="section-intro">
            <p className="eyebrow">Featured Dishes</p>
            <h2>Chef’s Selection of Signature Flavours</h2>
          </div>
          <div className="featured-grid">
            {featuredDishes.map((dish) => (
              <article className="featured-card" key={dish.name}>
                <div className="featured-image">
                  <img src={dish.image} alt={dish.name} />
                </div>
                <div className="featured-body">
                  <p className="featured-tag">Chef’s Pick</p>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-intro">
            <p className="eyebrow">Gallery</p>
            <h2>Atmosphere, Cuisine, and Celebration</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div className="gallery-item" key={`gallery-${index}`}>
                <img src={image} alt={`Dining experience ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="reviews-section" id="reviews">
          <div className="section-intro">
            <p className="eyebrow">Reviews</p>
            <h2>Guest Testimonials</h2>
          </div>
          <div className="review-grid">
            {testimonials.map((review, index) => (
              <article className="review-card" key={`${review.author}-${index}`}>
                <p className="review-stars">★★★★☆</p>
                <p className="quote">“{review.quote}”</p>
                <p className="author">{review.author}</p>
                <p className="details">{review.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="map-section">
          <div className="section-intro">
            <p className="eyebrow">Location</p>
            <h2>Find Us on Sajjangarh Road</h2>
            <p>
              Neelam Punjabi Dhaba is located near Subhash Chauraha in Shavri Colony, offering a true Punjabi dining experience in the heart of Udaipur.
            </p>
          </div>
          <div className="map-layout">
            <div className="map-copy">
              <div className="map-highlight">Premium dining destination</div>
              <p>Get directions directly from your phone, call to reserve your table, or visit our kitchen for an unforgettable meal.</p>
              <div className="contact-actions contact-actions--map">
                <a className="button button-primary" href="tel:+919999999999">
                  Call Now
                </a>
                <a className="button button-secondary" href="https://www.google.com/maps/dir/?api=1&destination=18+Sajjangarh+Rd+Udaipur+Rajasthan+313004" target="_blank" rel="noreferrer">
                  Directions
                </a>
              </div>
            </div>
            <div className="map-frame">
              <iframe
                title="Neelam Punjabi Dhaba Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.555511914215!2d73.75276791500042!3d24.575108484115735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ebd48c4193b7%3A0x1cf3dc5786808faf!2sSajjangarh%20Rd%2C%20Udaipur%2C%20Rajasthan%20313004!5e0!3m2!1sen!2sin!4v1717219710000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-intro">
            <p className="eyebrow">Contact</p>
            <h2>Reserve a Table or Place an Order</h2>
            <p>Reach out by phone, WhatsApp, email, or visit us for a premium Punjabi dining experience.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card contact-details">
              <h3>Visit Neelam Punjabi Dhaba</h3>
              <p>18, Sajjangarh Rd, near Subhash Chauraha, Haridas Ji Ki Magri, Shavri Colony, Udaipur, Rajasthan 313004</p>
              <div className="contact-meta">
                <div>
                  <strong>Opening Hours</strong>
                  <p>Mon–Sun: 11:30 AM – 11:00 PM</p>
                </div>
                <div>
                  <strong>Price Range</strong>
                  <p>₹200–₹400 per person</p>
                </div>
              </div>
              <div className="contact-actions">
                <a className="button button-primary" href="tel:+919999999999">
                  Call Now
                </a>
                <a className="button button-secondary" href="mailto:contact@neelampunjabidhaba.com">
                  Email Us
                </a>
                <a className="button button-outline" href="https://wa.me/919999999999?text=I%20would%20like%20to%20order%20online" target="_blank" rel="noreferrer">
                  WhatsApp Order
                </a>
              </div>
            </div>
            <div className="contact-card contact-visual">
              <h3>Book Today</h3>
              <p>Secure your table with premium hospitality and an elegant Punjabi dining atmosphere.</p>
              <div className="contact-visual-image">
                <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=900&q=80" alt="Premium Punjabi dining" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href="https://wa.me/919999999999?text=Hello%20Neelam%20Punjabi%20Dhaba%2C%20I%20would%20like%20to%20order%20online"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span>WhatsApp</span>
      </a>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <p className="eyebrow">Neelam Punjabi Dhaba</p>
            <p>18, Sajjangarh Rd, near Subhash Chauraha, Haridas Ji Ki Magri, Shavri Colony, Udaipur, Rajasthan 313004</p>
          </div>
          <div>
            <p className="eyebrow">Quick Links</p>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#menu">Menu</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div>
            <p className="eyebrow">Follow Us</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Neelam Punjabi Dhaba. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;
