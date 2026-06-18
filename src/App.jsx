import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import logo from './assets/logo.png';

// Generated dish images
import imgParatha from './assets/dish_paratha.png';
import imgQehwa from './assets/dish_qehwa.png';
import imgFries from './assets/dish_fries.png';
import imgSandwiches from './assets/dish_sandwiches.png';
import imgFrenchFood from './assets/dish_french_food.png';
import imgMexicanFood from './assets/dish_mexican_food.png';
import imgBiryani from './assets/dish_biryani.png';

// ─── Dish Filter Categories ───
const dishCategories = [
  { id: 'all', name: "All", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", emoji: "🍽️" },
  { id: 'bbq', name: "BBQ & Grill", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop", emoji: "🔥" },
  { id: 'burgers', name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", emoji: "🍔" },
  { id: 'pizza', name: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", emoji: "🍕" },
  { id: 'tacos', name: "Tacos & Mexican", image: imgMexicanFood, emoji: "🌮" },
  { id: 'fries', name: "Fries", image: imgFries, emoji: "🍟" },
  { id: 'pasta', name: "Pasta", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", emoji: "🍝" },
  { id: 'asian', name: "Asian / Wok", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop", emoji: "🥡" },
  { id: 'wraps', name: "Wraps & Rolls", image: imgSandwiches, emoji: "🌯" },
  { id: 'desserts', name: "Desserts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop", emoji: "🧁" },
  { id: 'kunafa', name: "Kunafa & Sweets", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=300&fit=crop", emoji: "🍯" },
  { id: 'coffee', name: "Coffee", image: imgQehwa, emoji: "☕" },
  { id: 'boba', name: "Boba Tea", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop", emoji: "🧋" },
  { id: 'sushi', name: "Japanese / Sushi", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop", emoji: "🍣" },
  { id: 'pakistani', name: "Pakistani", image: imgBiryani, emoji: "🇵🇰" },
  { id: 'continental', name: "Continental", image: imgFrenchFood, emoji: "🍳" },
  { id: 'paratha', name: "Paratha", image: imgParatha, emoji: "🫓" },
];

// ─── Real Creek Walk DHA Karachi Restaurants ───
const restaurantsData = [
  // ── Main Food Carts & Grills ──
  {
    id: 1,
    name: "Tacocat",
    type: "Food Cart",
    category: "Main Food Carts & Grills",
    tags: ['tacos', 'fries'],
    specialty: "Famous for street-style Mexican tacos & loaded nachos",
    cuisines: ["Mexican", "Street Food", "Tacos"],
    dishes: ["Crispy Fish Tacos", "Spicy Beef Tacos", "Chicken Tacos", "Loaded Nachos", "Guacamole Bowls"],
    whatsapp: "+923001234501",
    menuLink: "#",
    orderLink: "#",
    rating: 4.6,
    priceRange: "$$",
    isPopular: true,
  },
  {
    id: 2,
    name: "2 Guys 1 Grill",
    type: "Food Cart",
    category: "Main Food Carts & Grills",
    tags: ['burgers', 'bbq', 'wraps'],
    specialty: "Smash-style beef burgers & smoky BBQ street food",
    cuisines: ["Burgers", "BBQ", "Street Food"],
    dishes: ["Smash Beef Burger", "Charcoal-Grilled Sliders", "BBQ Skewers", "Smoky Chicken Wings", "Loaded Cheese Fries"],
    whatsapp: "+923001234502",
    menuLink: "#",
    orderLink: "#",
    rating: 4.5,
    priceRange: "$$",
    isPopular: true,
  },
  {
    id: 3,
    name: "Hot Wheels Pizza",
    type: "Pizza Cart",
    category: "Main Food Carts & Grills",
    tags: ['pizza'],
    specialty: "Hand-tossed artisanal pizza from classic to loaded",
    cuisines: ["Italian", "Pizza", "Fast Food"],
    dishes: ["Classic Margherita", "Spicy Pepperoni", "BBQ Chicken Pizza", "Four Cheese", "Veggie Supreme"],
    whatsapp: "+923001234503",
    menuLink: "#",
    orderLink: "#",
    rating: 4.4,
    priceRange: "$$",
  },
  {
    id: 4,
    name: "Street Kitchen",
    type: "Container Setup",
    category: "Main Food Carts & Grills",
    tags: ['fries', 'pasta', 'continental', 'wraps'],
    specialty: "Continental fast food favorites in a container setup",
    cuisines: ["Continental", "Fast Food", "Italian"],
    dishes: ["Loaded Fries", "Alfredo Pasta", "Tarragon Chicken", "Grilled Wraps", "Chicken Caesar Wrap"],
    whatsapp: "+923001234504",
    menuLink: "#",
    orderLink: "#",
    rating: 4.3,
    priceRange: "$$",
  },
  {
    id: 5,
    name: "Fusions Feast Cart",
    type: "Food Cart",
    category: "Main Food Carts & Grills",
    tags: ['fries', 'wraps', 'continental'],
    specialty: "Quick-bite fusion street snacks & finger foods",
    cuisines: ["Fusion", "Street Food", "Snacks"],
    dishes: ["Loaded Nachos", "Fusion Sliders", "Spicy Wings", "Crispy Strips", "Dynamite Shrimp"],
    whatsapp: "+923001234505",
    menuLink: "#",
    orderLink: "#",
    rating: 4.2,
    priceRange: "$",
  },
  {
    id: 6,
    name: "Fire Wok",
    type: "Food Cart",
    category: "Main Food Carts & Grills",
    tags: ['asian'],
    specialty: "Live stir-fried Asian street food & dynamic bowls",
    cuisines: ["Asian", "Chinese", "Wok"],
    dishes: ["Wok-Tossed Noodles", "Chicken Stir-Fry Bowl", "Beef Teriyaki Bowl", "Thai Basil Chicken", "Egg Fried Rice"],
    whatsapp: "+923001234506",
    menuLink: "#",
    orderLink: "#",
    rating: 4.5,
    priceRange: "$$",
    isPopular: true,
  },
  {
    id: 7,
    name: "Zakoota Bar & Grill",
    type: "Outdoor Spot",
    category: "Main Food Carts & Grills",
    tags: ['bbq', 'wraps', 'paratha', 'pakistani'],
    specialty: "Traditional BBQ platters & paratha rolls",
    cuisines: ["BBQ", "Pakistani", "Grill"],
    dishes: ["BBQ Platter", "Seekh Kebabs", "Chicken Wraps", "Paratha Rolls", "Malai Boti"],
    whatsapp: "+923001234507",
    menuLink: "#",
    orderLink: "#",
    rating: 4.7,
    priceRange: "$$",
    isPopular: true,
  },

  // ── Desserts, Specialty Coffee & Drinks ──
  {
    id: 8,
    name: "The Waffle Bar",
    type: "Dessert Kiosk",
    category: "Desserts, Coffee & Drinks",
    tags: ['desserts'],
    specialty: "Loaded waffles & viral Dubai pistachio kunafa chocolate",
    cuisines: ["Desserts", "Waffles", "Sweets"],
    dishes: ["Loaded Waffles", "Mini Pancakes", "Pizzookie", "Dubai Pistachio Kunafa Chocolate", "Nutella Crepe"],
    whatsapp: "+923001234508",
    menuLink: "#",
    orderLink: "#",
    rating: 4.8,
    priceRange: "$$",
    isPopular: true,
  },
  {
    id: 9,
    name: "Kunafa & More",
    type: "Sweets Shop",
    category: "Desserts, Coffee & Drinks",
    tags: ['kunafa', 'desserts', 'pakistani'],
    specialty: "Hot Middle Eastern Kunafas & authentic Arabic Mandi",
    cuisines: ["Middle Eastern", "Arabic", "Sweets"],
    dishes: ["Cheese Kunafa", "Cream Kunafa", "Turkish Baklava", "Arabic Mandi", "Pistachio Rolls"],
    whatsapp: "+923001234509",
    menuLink: "#",
    orderLink: "#",
    rating: 4.6,
    priceRange: "$$",
  },
  {
    id: 10,
    name: "Sync Coffee",
    type: "Coffee Cart",
    category: "Desserts, Coffee & Drinks",
    tags: ['coffee'],
    specialty: "Premium hot espressos & refreshing iced cold brews",
    cuisines: ["Coffee", "Specialty Drinks"],
    dishes: ["Hot Espresso", "Caramel Latte", "Cortado", "Iced Cold Brew", "Mocha Frappe"],
    whatsapp: "+923001234510",
    menuLink: "#",
    orderLink: "#",
    rating: 4.5,
    priceRange: "$$",
  },
  {
    id: 11,
    name: "Raymah Coffee",
    type: "Coffee Cart",
    category: "Desserts, Coffee & Drinks",
    tags: ['coffee'],
    specialty: "Local & international brews for chilly coastal evenings",
    cuisines: ["Coffee", "Hot Drinks"],
    dishes: ["Cappuccino", "Arabic Qehwa", "Turkish Coffee", "Flat White", "Hot Chocolate"],
    whatsapp: "+923001234511",
    menuLink: "#",
    orderLink: "#",
    rating: 4.3,
    priceRange: "$",
  },
  {
    id: 12,
    name: "Happy QQ Boba",
    type: "Boba Station",
    category: "Desserts, Coffee & Drinks",
    tags: ['boba'],
    specialty: "Classic tapioca milk teas & iced fruit teas",
    cuisines: ["Bubble Tea", "Asian Drinks"],
    dishes: ["Classic Tapioca Milk Tea", "Taro Boba", "Matcha Latte Boba", "Iced Fruit Tea", "Mango Passion Fruit"],
    whatsapp: "+923001234512",
    menuLink: "#",
    orderLink: "#",
    rating: 4.4,
    priceRange: "$",
  },

  // ── DA Creek Club / Marina Restaurants ──
  {
    id: 13,
    name: "Creek Asuka",
    type: "Fine Dining",
    category: "DA Creek Club / Marina",
    tags: ['sushi', 'asian'],
    specialty: "High-end Japanese cuisine with live sushi bar",
    cuisines: ["Japanese", "Sushi", "Contemporary"],
    dishes: ["Salmon Nigiri", "Dragon Roll", "Tuna Sashimi", "Miso Ramen", "Tempura Platter"],
    whatsapp: "+923001234513",
    menuLink: "#",
    orderLink: "#",
    rating: 4.9,
    priceRange: "$$$",
    isPopular: true,
  },
  {
    id: 14,
    name: "Café De Creek",
    type: "Café",
    category: "DA Creek Club / Marina",
    tags: ['coffee', 'continental'],
    specialty: "Casual coffee shop with breakfasts & continental snacks",
    cuisines: ["Café", "Continental", "Breakfast"],
    dishes: ["Avocado Toast", "English Breakfast", "Club Sandwich", "Caesar Salad", "Cheesecake"],
    whatsapp: "+923001234514",
    menuLink: "#",
    orderLink: "#",
    rating: 4.4,
    priceRange: "$$",
  },
  {
    id: 15,
    name: "Indus Restaurant",
    type: "Fine Dining",
    category: "DA Creek Club / Marina",
    tags: ['pakistani', 'bbq', 'paratha'],
    specialty: "Upscale buffet & à la carte Pakistani dining",
    cuisines: ["Pakistani", "Buffet", "Traditional"],
    dishes: ["Chicken Karahi", "Mutton Biryani", "Dal Makhani", "Seekh Kebab", "Naan & Paratha"],
    whatsapp: "+923001234515",
    menuLink: "#",
    orderLink: "#",
    rating: 4.7,
    priceRange: "$$$",
    isPopular: true,
  },
  {
    id: 16,
    name: "The BBQ Lawn",
    type: "Open-Air Restaurant",
    category: "DA Creek Club / Marina",
    tags: ['bbq', 'pakistani'],
    specialty: "Open-air traditional grills & live tikka setup",
    cuisines: ["BBQ", "Grill", "Pakistani"],
    dishes: ["Chicken Tikka", "Beef Seekh Kebab", "Mixed Grill Platter", "Reshmi Kebab", "Chapli Kebab"],
    whatsapp: "+923001234516",
    menuLink: "#",
    orderLink: "#",
    rating: 4.8,
    priceRange: "$$$",
    isPopular: true,
  },
];

// ─── Group labels for section headers ───
const categoryOrder = [
  "Main Food Carts & Grills",
  "Desserts, Coffee & Drinks",
  "DA Creek Club / Marina",
];

// ─── Components ───

function DishCarousel({ activeFilter, onFilterChange }) {
  const items = dishCategories.map((dish) => (
    <div
      key={dish.id}
      className={`dish-card ${activeFilter === dish.id ? 'dish-card-active' : ''}`}
      onClick={() => onFilterChange(dish.id)}
      title={`Filter by ${dish.name}`}
    >
      <span className="dish-card-label">{dish.name}</span>
      <img src={dish.image} alt={dish.name} className="dish-card-image" loading="lazy" />
      {activeFilter === dish.id && <div className="dish-card-active-indicator"></div>}
    </div>
  ));

  return (
    <div className="dish-carousel-wrapper">
      <div className="dish-carousel">
        <div className="dish-carousel-track" aria-hidden="false">
          {items}
        </div>
        <div className="dish-carousel-track" aria-hidden="true">
          {items}
        </div>
      </div>
    </div>
  );
}

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <span className="star-rating" title={`${rating} out of 5`}>
      {'★'.repeat(fullStars)}
      {hasHalf && '½'}
      <span className="star-value">{rating}</span>
    </span>
  );
}

const getRestaurantImage = (tags) => {
  if (!tags) return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop";
  if (tags.includes('tacos') || tags.includes('mexican')) return imgMexicanFood;
  if (tags.includes('fries')) return imgFries;
  if (tags.includes('wraps') || tags.includes('sandwiches')) return imgSandwiches;
  if (tags.includes('asian') || tags.includes('chinese')) return "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop";
  if (tags.includes('bbq')) return "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=400&fit=crop";
  if (tags.includes('pizza')) return "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop";
  if (tags.includes('burgers')) return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop";
  if (tags.includes('coffee')) return imgQehwa;
  if (tags.includes('desserts')) return "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop";
  if (tags.includes('kunafa')) return "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=400&fit=crop";
  if (tags.includes('sushi')) return "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop";
  if (tags.includes('pakistani') || tags.includes('paratha')) return imgBiryani;
  if (tags.includes('continental')) return imgFrenchFood;
  return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop";
};

function RestaurantCard({ restaurant }) {
  return (
    <div className="grid-restaurant-card">
      <div className="grid-rc-image-container">
        <img src={getRestaurantImage(restaurant.tags)} alt={restaurant.name} className="grid-rc-image" loading="lazy" />
      </div>
      <div className="grid-rc-content">
        <div className="grid-rc-header">
          <h3 className="grid-rc-name">{restaurant.name}</h3>
          <div className="grid-rc-rating">
            <span className="grid-rc-star">★</span> {restaurant.rating.toFixed(1)} <span className="grid-rc-rating-max">/ 5</span>
          </div>
        </div>
        <div className="grid-rc-subtitle">{restaurant.type}</div>
        <div className="grid-rc-desc">{restaurant.specialty}</div>
        <div className="grid-rc-actions">
          <a href={restaurant.menuLink} className="grid-rc-btn">Menu</a>
          <a href={restaurant.orderLink} className="grid-rc-btn">Order</a>
          <a href={`https://wa.me/${restaurant.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="grid-rc-btn whatsapp">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [expandedRestaurant, setExpandedRestaurant] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleRestaurantsClick = (e) => {
    e.preventDefault();
    setCurrentView('restaurants');
    setExpandedRestaurant(null);
    setActiveFilter('all');
  };

  const handleOffersClick = (e) => {
    e.preventDefault();
    setCurrentView('offers');
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    setCurrentView('brand');
  };

  const handleBackClick = () => {
    setCurrentView('home');
    setExpandedRestaurant(null);
    setActiveFilter('all');
  };

  const toggleRestaurant = (id) => {
    setExpandedRestaurant(expandedRestaurant === id ? null : id);
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setExpandedRestaurant(null);
  };

  // Filter restaurants based on active filter
  const filteredRestaurants = activeFilter === 'all'
    ? restaurantsData
    : restaurantsData.filter(r => r.tags.includes(activeFilter));

  // Group filtered restaurants by category
  const groupedRestaurants = categoryOrder.reduce((groups, cat) => {
    const items = filteredRestaurants.filter(r => r.category === cat);
    if (items.length > 0) {
      groups.push({ category: cat, restaurants: items });
    }
    return groups;
  }, []);

  const activeFilterName = dishCategories.find(d => d.id === activeFilter)?.name || 'All';

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo" onClick={handleBackClick} title="Go Home">
          <img src={logo} alt="Fakhir Group Free WiFi" className="logo-image" />
        </div>
      </header>

      {currentView === 'home' && (
        <main className="main-content">
          <a href="#restaurants" className="nav-item" onClick={handleRestaurantsClick}>
            Restaurants
          </a>

          <a href="#offers" className="nav-item" onClick={handleOffersClick}>
            Offers
          </a>

          <a href="#brand" className="nav-item" onClick={handleBrandClick}>
            Show Your Brand
          </a>
        </main>
      )}

      {currentView === 'restaurants' && (
        <main className="restaurants-view">
          <div className="restaurants-header">
            <button className="back-button" onClick={handleBackClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back
            </button>
            <h1 className="restaurants-title">
              {activeFilter === 'all' ? 'Choose Creek Walk Restaurants by Speciality Dishes' : activeFilterName}
            </h1>
          </div>

          {/* Dish Filter Carousel */}
          <DishCarousel activeFilter={activeFilter} onFilterChange={handleFilterChange} />

          {/* Active Filter Chip */}
          {activeFilter !== 'all' && (
            <div className="active-filter-bar">
              <span className="filter-chip">
                Showing: <strong>{activeFilterName}</strong>
                <span className="filter-count">{filteredRestaurants.length} spot{filteredRestaurants.length !== 1 ? 's' : ''}</span>
                <button className="filter-clear" onClick={() => handleFilterChange('all')} title="Clear filter">✕</button>
              </span>
            </div>
          )}

          {/* Grouped Restaurant Lists */}
          {groupedRestaurants.length > 0 ? (
            groupedRestaurants.map((group) => (
              <div key={group.category} className="restaurant-group">
                <h2 className="group-title">
                  <span className="group-title-icon">
                    {group.category === "Main Food Carts & Grills" && "🛒"}
                    {group.category === "Desserts, Coffee & Drinks" && "☕"}
                    {group.category === "DA Creek Club / Marina" && "⚓"}
                  </span>
                  {group.category}
                </h2>
                <div className="restaurant-list">
                  {group.restaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-emoji">🔍</span>
              <p className="no-results-text">No restaurants found for "<strong>{activeFilterName}</strong>"</p>
              <button className="no-results-btn" onClick={() => handleFilterChange('all')}>Show All Restaurants</button>
            </div>
          )}
        </main>
      )}

      {currentView === 'offers' && (
        <main className="offers-view">
          <div className="restaurants-header">
            <button className="back-button" onClick={handleBackClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back
            </button>
            <h1 className="restaurants-title">Offers</h1>
          </div>

          <div className="offers-layout">
            <div className="offers-categories-list">
              <a href="#" className="offers-category-item active">All Categories</a>
              <a href="#" className="offers-category-item">Shopping Venues</a>
              <a href="#" className="offers-category-item">Food & Beverages</a>
              <a href="#" className="offers-category-item">Education Sector</a>
              <a href="#" className="offers-category-item">Healthcare</a>
              <a href="#" className="offers-category-item">Cinemas</a>
              <a href="#" className="offers-category-item">Public Parks</a>
              <a href="#" className="offers-category-item">Museums</a>
              <a href="#" className="offers-category-item">On-Demand Internet</a>
              <a href="#" className="offers-category-item">On the Move</a>
            </div>
          </div>
        </main>
      )}

      {currentView === 'brand' && (
        <main className="brand-view">
          <div className="restaurants-header">
            <button className="back-button" onClick={handleBackClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Back
            </button>
            <h1 className="restaurants-title">Show Your Brand</h1>
          </div>

          <div className="brand-promo-banner">
            <h2 className="promo-text">
              Buy 1 Get 1 <span className="promo-badge">FREE</span> on all the products Limited time offer
            </h2>
          </div>

          <div className="brand-cards-container">
            {/* Golden Sponsorship */}
            <div className="brand-card gold-card">
              <div className="card-icon-box">
                <span className="emoji-icon">👑</span>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <span className="tag premium-tag">Premium Offer</span>
                  <h3 className="pkg-title">Golden</h3>
                  <span className="pkg-subtitle">Sponsorship</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">30,000/-</span> <span className="currency">Monthly</span>
                  </div>
                  <span className="price-desc">Choose any of Prime Locations</span>
                </div>
              </div>
            </div>

            {/* Silver Sponsorship */}
            <div className="brand-card silver-card">
              <div className="card-icon-box">
                <span className="emoji-icon">🛡️</span>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <span className="tag featured-tag">Featured</span>
                  <h3 className="pkg-title">Silver</h3>
                  <span className="pkg-subtitle">Sponsorship</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">20,000/-</span> <span className="currency">PKR</span>
                  </div>
                  <span className="price-desc">Choose any of Prime Locations</span>
                </div>
              </div>
            </div>

            {/* Website Development */}
            <div className="brand-card cyan-card">
              <div className="card-icon-box">
                <span className="emoji-icon">💻</span>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <h3 className="pkg-title">Website</h3>
                  <span className="pkg-subtitle">Development</span>
                  <span className="pkg-extra">with Maps & Whatsapp Integration</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">45,000/-</span> <span className="currency">PKR</span>
                  </div>
                  <span className="price-desc multi-line">
                    01 Year free domain<br />10 Corporate emails
                  </span>
                </div>
              </div>
            </div>

            {/* Image Ads */}
            <div className="brand-card cyan-card">
              <div className="card-icon-box">
                <div className="shape-badge teal">
                  <span className="emoji-icon">🖼️</span>
                </div>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <h3 className="pkg-title">Image</h3>
                  <span className="pkg-subtitle">Ads</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">10,000/-</span> <span className="currency">PKR</span>
                  </div>
                  <span className="price-desc">1000 Impressions</span>
                </div>
              </div>
            </div>

            {/* Video Ads */}
            <div className="brand-card cyan-card">
              <div className="card-icon-box">
                <div className="shape-badge blue">
                  <span className="emoji-icon">▶️</span>
                </div>
              </div>
              <div className="card-content">
                <div className="card-title-section">
                  <h3 className="pkg-title">Video</h3>
                  <span className="pkg-subtitle">Ads</span>
                </div>
                <div className="card-divider"></div>
                <div className="card-price-section">
                  <span className="price-label">Starting from</span>
                  <div className="price-value">
                    <span className="amount">20,000/-</span> <span className="currency">PKR</span>
                  </div>
                  <span className="price-desc">1000 Impressions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="brand-booking-bar">
            <a
              href="https://adsonwifi.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-btn"
            >
              For Booking
            </a>
            <div className="booking-info">
              www.adsonwifi.com | sales@fakhirgroup.com
            </div>
          </div>
        </main>
      )}

      <footer className="footer">
        <button onClick={() => setIsContactPopupOpen(true)} className="contact-link" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          Contact Us - Complaints
        </button>
      </footer>

      {isContactPopupOpen && (
        <div className="modal-overlay" onClick={() => setIsContactPopupOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Contact & Complaints</h2>
            <p>Please reach out to us for any assistance:</p>
            <div className="contact-details">
              <p><strong>Email:</strong> support@fakhirgroup.com</p>
              <p><strong>Phone:</strong> 0334-5588889</p>
            </div>
            <button className="close-button" onClick={() => setIsContactPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
