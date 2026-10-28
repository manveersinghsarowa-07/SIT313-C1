import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import bcrypt from 'bcryptjs';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
      await addDoc(collection(db, 'users'), {
        name,
        email,
        password: hashedPassword
      });
      navigate('/login');
    } catch (error) {
      alert('Error creating account. Please try again.');
    }
  };

  return (
    <div style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
      <div style={{ border: '1px solid #000', padding: '40px', width: '100%', maxWidth: '500px', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', color: '#000', marginBottom: '30px' }}>Create a DEV@Deakin Account</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label style={{ color: '#000', fontWeight: 'bold' }}>Name*</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '10px', border: '1px solid #000' }} />
          
          <label style={{ color: '#000', fontWeight: 'bold' }}>Email*</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px', border: '1px solid #000' }} />
          
          <label style={{ color: '#000', fontWeight: 'bold' }}>Password*</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', border: '1px solid #000' }} />
          
          <label style={{ color: '#000', fontWeight: 'bold' }}>Confirm password*</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ padding: '10px', border: '1px solid #000' }} />
          
          <button onClick={handleSignUp} style={{ padding: '12px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '15px', fontWeight: 'bold' }}>Create</button>
        </div>
      </div>
    </div>
  );
}