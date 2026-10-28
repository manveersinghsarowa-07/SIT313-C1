import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Post from './routes/Post';
import './App.css';

export default function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Courier New, Courier, monospace' }}>
        <Navbar />
        <div style={{ flex: 1, backgroundColor: '#fff', color: '#000' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}