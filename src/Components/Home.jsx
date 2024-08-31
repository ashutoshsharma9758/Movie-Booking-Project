import React from 'react'
import data from "../data.js";
import { Link } from 'react-router-dom';
import "../styles/Home.css"
export default function Home() {

  return (
  <>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MovieApp</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <div className="movie-grid">
      {data.map(movie => (
          <div key={movie.id} className="movie-card">
              <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                  <img src={movie.image} alt={movie.title} />
                  <h3 style={{color:'black'}}>{movie.title}</h3>
              </Link>
              </div>
          ))}
    </div>
  </>
  )
}