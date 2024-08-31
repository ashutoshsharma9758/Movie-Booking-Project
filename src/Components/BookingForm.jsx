import React from 'react'
import data from '../data';
import {useParams, useNavigate} from 'react-router-dom';
import { useState } from 'react';
export default function BookinForm() {
    const {id}=useParams();
    const movie = data.find(movie=>movie.id===parseInt(id));
    const navigate=useNavigate();
    const [formData, setFormData]=useState({name:'',email:'',mobile:''});
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData({...formData, [name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        const bookingId=Math.floor(Math.random() * 10000);
        const bookingData={...formData, movie:movie.title, bookingId };
        navigate(`/confirmation`,{state:bookingData});
    };
  return (
    <form onSubmit={handleSubmit} >
            <h1 style={{textAlign:"center"}}>Book Seats for Movie {movie.title}</h1>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center",marginLeft:"400px" ,borderRadius:"10px", padding:"20px", width:"400px", border:"1px solid black"}}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <br />
            <label>
                Mobile:
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
            </div>
        </form>

  )
}