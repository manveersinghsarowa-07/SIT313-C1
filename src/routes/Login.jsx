import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import bcrypt from 'bcryptjs';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      alert('Incorrect details. Please try again or sign up for a free account.');
      return;
    }

    let isValid = false;
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      if (bcrypt.compareSync(password, userData.password)) {
        isValid = true;
      }
    });

    if (isValid) {
      navigate('/');
    } else {
      alert('Incorrect details. Please try again or sign up for a free account.');
    }
  };

  return (
    <div style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
      <div style={{ border: '1px solid #000', padding: '30px', width: '100%', maxWidth: '400px', backgroundColor: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button onClick={() => navigate('/signup')} style={{ cursor: 'pointer', padding: '6px 12px', backgroundColor: '#fff', color: '#000', border: '1px solid #000' }}>Sign up</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label style={{ color: '#000', fontWeight: 'bold' }}>Your email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px', border: '1px solid #000' }} />
          
          <label style={{ color: '#000', fontWeight: 'bold' }}>Your password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', border: '1px solid #000' }} />
          
          <button onClick={handleLogin} style={{ padding: '12px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' }}>Login</button>
        </div>
      </div>
    </div>
  );
}