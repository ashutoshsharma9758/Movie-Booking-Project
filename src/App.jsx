import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './Components/MovieDetail.jsx';
import BookingForm from './Components/BookingForm.jsx';
import Confirmation from './Components/Confirmation.jsx';
import Home from "./Components/Home.jsx"
function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movie/:id" element={<MovieDetail/>} />
                <Route path="/booking/:id" element={<BookingForm/>} />
                <Route path="/confirmation" element={<Confirmation/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App