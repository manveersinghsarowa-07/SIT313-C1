export default function ArticleCard({ article }) {
  return (
    <div style={{ border: '1px solid #000', width: '250px', textAlign: 'left', backgroundColor: '#fff', color: '#000' }}>
      <img src={article.image} alt={article.title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderBottom: '1px solid #000' }} />
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>{article.title}</h3>
        <p style={{ color: '#333', fontSize: '14px', marginBottom: '15px' }}>{article.description}</p>
        <hr style={{ borderColor: '#000', borderTop: 'none', margin: '10px 0' }}/>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold' }}>
          <span>⭐ {article.rating}</span>
          <span>{article.author}</span>
        </div>
      </div>
    </div>
  );
}