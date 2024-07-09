import React, { useState } from "react";
import { ReactComponent as Logo } from "../images/Eurosial.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../images/Vector (5).svg";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">
          <Logo />
        </div>
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <div className="navbar-middle mx-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/help" className="nav-link">
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav navbar-right">
            <Link to="/sign-in" className="nav-link sign-in">
              Sign In
            </Link>
            <button className="btn nav-btn">Create Account</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Filter = () => {
  const handleSearch = (event) => {
    // Handle search logic here
  };

  const handleCategoryFilter = (category) => {
    // Handle category filter logic here
  };

  const handlePriceFilter = (price) => {
    // Handle price filter logic here
  };

  return (
    <nav className="navbar filter navbar-expand-lg">
      <div className="container">
        <form className="form-inline" onSubmit={handleSearch}>
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder={Search}
              aria-label="Search"
            />
          </div>
        </form>
        <div className="category-filter">
          <div>
            <label htmlFor="category">Category:</label>
          </div>
          <select
            id="category"
            className="form-control"
            onChange={handleCategoryFilter}
          >
            <option value="">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more category options here */}
          </select>
        </div>
        <div className="price-filter">
          <div>
            <label htmlFor="price">Price:</label>
          </div>
          <select
            id="price"
            className="form-control"
            onChange={handlePriceFilter}
          >
            <option value="">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
    </nav>
  );
};
