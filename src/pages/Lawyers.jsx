import { useState, useEffect } from 'react';
import { LawyerCard } from '../components/LawyerCard';

const mockLawyers = [
  {
    id: '1',
    name: 'John Smith',
    specialization: 'Family Law',
    bio: 'Experienced family lawyer with 10+ years of practice. Specializes in divorce and child custody cases.',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    specialization: 'Corporate Law',
    bio: 'Corporate lawyer helping businesses with contracts, mergers, and compliance issues.',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Michael Brown',
    specialization: 'Criminal Defense',
    bio: 'Former prosecutor now defending clients in criminal cases with a high success rate.',
    rating: 4.7
  }
];

const Lawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLawyers(mockLawyers);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <div>Loading lawyers...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Our Top Lawyers</h2>
      <div>
        {lawyers.map(lawyer => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>
    </div>
  );
};

export default Lawyers;