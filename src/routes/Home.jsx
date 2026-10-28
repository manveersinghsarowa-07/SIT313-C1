import FeaturedArticles from '../components/FeaturedArticles';
import FeaturedTutorials from '../components/FeaturedTutorials';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <FeaturedArticles />
      <FeaturedTutorials />
    </div>
  );
}