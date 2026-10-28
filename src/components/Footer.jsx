export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', borderTop: '2px solid #000' }}>
      <div style={{ padding: '30px', textAlign: 'center', borderBottom: '1px solid #333' }}>
        <span style={{ fontWeight: 'bold', marginRight: '15px' }}>SIGN UP FOR OUR DAILY INSIDER</span>
        <input 
          type="email" 
          placeholder="Enter your email" 
          style={{ padding: '10px', width: '250px', marginRight: '10px', border: '1px solid #fff', backgroundColor: '#000', color: '#fff', outline: 'none' }}
        />
        <button style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#fff', color: '#000', border: '1px solid #fff', fontWeight: 'bold' }}>Subscribe</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '40px 20px' }}>
        <div>
          <h3 style={{ borderBottom: '2px solid #fff', paddingBottom: '10px' }}>Explore</h3>
          <p style={{ cursor: 'pointer' }}>Home</p>
          <p style={{ cursor: 'pointer' }}>Questions</p>
          <p style={{ cursor: 'pointer' }}>Articles</p>
          <p style={{ cursor: 'pointer' }}>Tutorials</p>
        </div>
        <div>
          <h3 style={{ borderBottom: '2px solid #fff', paddingBottom: '10px' }}>Support</h3>
          <p style={{ cursor: 'pointer' }}>FAQs</p>
          <p style={{ cursor: 'pointer' }}>Help</p>
          <p style={{ cursor: 'pointer' }}>Contact Us</p>
        </div>
        <div>
          <h3 style={{ borderBottom: '2px solid #fff', paddingBottom: '10px' }}>Stay connected</h3>
          <p style={{ cursor: 'pointer' }}>Facebook</p>
          <p style={{ cursor: 'pointer' }}>Twitter</p>
          <p style={{ cursor: 'pointer' }}>Instagram</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #333' }}>
        <h2>DEV@Deakin 2026</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
          <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
          <span style={{ cursor: 'pointer' }}>Terms</span>
          <span style={{ cursor: 'pointer' }}>Code of Conduct</span>
        </div>
      </div>
    </footer>
  );
}