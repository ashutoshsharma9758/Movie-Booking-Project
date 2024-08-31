import React from 'react'
import data from "../data.js";
import { useParams, Link } from 'react-router-dom';
export default function MovieDetail() {
    const {id}=useParams();
    const movie = data.find(movie=>movie.id===parseInt(id));
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={movie.title} style={{ width: '300px', height: 'auto', borderRadius:"10px"}} />
            <p>{movie.description}</p>
            <Link to={`/booking/${id}`} style={{textDecoration:"none"}}><button>Book Seat</button></Link>
        </div>
    </div>
  )
}
