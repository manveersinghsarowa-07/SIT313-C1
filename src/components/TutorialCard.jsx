import React from 'react';

export default function TutorialCard({ tutorial }) {
  return (
    <div style={{ border: '1px solid #555', width: '250px', textAlign: 'left', backgroundColor: '#242424' }}>
      <img src={tutorial.image} alt={tutorial.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <div style={{ padding: '10px', color: 'white' }}>
        <h3 style={{ margin: '5px 0', fontSize: '18px' }}>{tutorial.title}</h3>
        <p style={{ color: '#aaa', fontSize: '14px' }}>{tutorial.description}</p>
        <hr style={{ borderColor: '#555' }}/>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
          <span>⭐ {tutorial.rating}</span>
          <span>{tutorial.username}</span>
        </div>
      </div>
    </div>
  );
}