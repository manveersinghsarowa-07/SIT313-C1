import ArticleCard from './ArticleCard';
import { articlesData } from '../data/contentData';

export default function FeaturedArticles() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#fff' }}>
      <h2 style={{ color: '#000' }}>Featured Articles</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        {articlesData.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <button style={{ marginTop: '30px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#000', color: '#fff', border: 'none', fontWeight: 'bold' }}>See all articles</button>
    </div>
  );
}