import React from 'react'
import { useLocation } from 'react-router-dom';
export default function Confirmation() {
    const location = useLocation();
    const bookingData = location.state;

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Seat Booked Successfully!</h1>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",marginLeft:"400px" ,borderRadius:"10px", padding:"20px", width:"400px", border:"1px solid black"}}>
        <p>Thank you, {bookingData.name}!</p>
        <p>Booking ID: {bookingData.bookingId}</p>
        <p>Movie: {bookingData.movie}</p>
        <p>Email: {bookingData.email}</p>
        <p>Mobile: {bookingData.mobile}</p>
        </div>
    </div>
  )
}