import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

export const LawyerCard = ({ lawyer }) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h5">{lawyer.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary">{lawyer.specialization}</Typography>
        <Typography variant="body2" style={{ margin: '1rem 0' }}>{lawyer.bio}</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">Rating: {lawyer.rating}/5</Typography>
          <Link to={`/lawyers/${lawyer.id}`}>
            <Button variant="contained" size="small">View Profile</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};