import TutorialCard from './TutorialCard';
import { tutorialsData } from '../data/contentData';

export default function FeaturedTutorials() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#fff', marginBottom: '40px' }}>
      <h2 style={{ color: '#000' }}>Featured Tutorials</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
        {tutorialsData.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
      <button style={{ marginTop: '30px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#000', color: '#fff', border: 'none', fontWeight: 'bold' }}>See all tutorials</button>
    </div>
  );
}