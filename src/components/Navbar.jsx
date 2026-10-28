import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '8px 20px', 
      backgroundColor: '#e6e6e6', 
      borderBottom: '1px solid #ccc',
      fontFamily: 'Courier New, Courier, monospace'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
        <h2 style={{ margin: 0, fontWeight: 'bold', fontSize: '18px' }}>DEV@Deakin</h2>
      </Link>
      
      <div style={{ width: '60%' }}>
        <input 
          type="text" 
          placeholder="🔍 Search..." 
          style={{ 
            width: '100%', 
            padding: '5px 10px', 
            border: '1px solid #777', 
            outline: 'none',
            fontFamily: 'Courier New, Courier, monospace',
            fontSize: '14px',
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            color: '#000'
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => navigate('/post')} 
          style={{ 
            padding: '4px 8px', 
            cursor: 'pointer', 
            backgroundColor: 'transparent', 
            border: 'none', 
            color: '#000', 
            fontWeight: 'bold', 
            fontFamily: 'Courier New, Courier, monospace',
            fontSize: '15px' 
          }}>
          Post
        </button>
        <button 
          onClick={() => navigate('/login')} 
          style={{ 
            padding: '4px 8px', 
            cursor: 'pointer', 
            backgroundColor: 'transparent', 
            border: 'none', 
            color: '#000', 
            fontWeight: 'bold', 
            fontFamily: 'Courier New, Courier, monospace',
            fontSize: '15px' 
          }}>
          Login
        </button>
      </div>
    </nav>
  );
}