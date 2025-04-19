import { Box, Container, Typography, Button, Grid, Paper, Avatar, Stack } from '@mui/material';
import { Gavel, Balance, VerifiedUser, SupportAgent } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const About = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const stats = [
    { value: '500+', label: 'Verified Lawyers' },
    { value: '10,000+', label: 'Successful Cases' },
    { value: '24/7', label: 'Availability' },
    { value: '95%', label: 'Client Satisfaction' }
  ];

  const team = [
    { 
      name: 'Sarah Johnson', 
      role: 'Founder & CEO', 
      bio: 'Former corporate attorney with 15+ years experience',
      avatar: '/avatars/sarah.jpg'
    },
    { 
      name: 'Michael Chen', 
      role: 'Head of Legal Operations', 
      bio: 'Specializes in legal tech and process optimization',
      avatar: '/avatars/michael.jpg'
    },
    { 
      name: 'David Wilson', 
      role: 'Client Success Director', 
      bio: 'Dedicated to ensuring exceptional client experiences',
      avatar: '/avatars/david.jpg'
    }
  ];

  return (
    <Box sx={{ py: 4 }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              color: 'dark.main'
            }}
          >
            About LegalConnect
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary"
            maxWidth="800px" 
            mx="auto"
          >
            Bridging the gap between clients and legal professionals through innovative technology
          </Typography>
        </Box>

        {/* Mission Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 8, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Our Mission
              </Typography>
              <Typography paragraph>
                To democratize access to legal services by making professional consultation affordable, 
                transparent, and convenient for everyone.
              </Typography>
              <Typography paragraph>
                We believe quality legal guidance should be accessible regardless of location or 
                financial status.
              </Typography>
              {!user && (
                <Button 
                  variant="contained" 
                  size="large" 
                  onClick={() => navigate('/register')}
                  sx={{ mt: 2 }}
                >
                  Join Our Platform
                </Button>
              )}
            </Grid>
          </Grid>
        </Paper>
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
            How It Works
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, height: '100%' }}>
                <Box textAlign="center" mb={3}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60, mx: 'auto' }}>
                    <SupportAgent fontSize="large" />
                  </Avatar>
                </Box>
                <Typography variant="h5" align="center" gutterBottom>
                  1. Describe Your Issue
                </Typography>
                <Typography align="center">
                  Share details about your legal situation through our secure platform
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, height: '100%' }}>
                <Box textAlign="center" mb={3}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60, mx: 'auto' }}>
                    <Balance fontSize="large" />
                  </Avatar>
                </Box>
                <Typography variant="h5" align="center" gutterBottom>
                  2. Get Matched
                </Typography>
                <Typography align="center">
                  Our system connects you with the most suitable legal expert
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, height: '100%' }}>
                <Box textAlign="center" mb={3}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60, mx: 'auto' }}>
                    <VerifiedUser fontSize="large" />
                  </Avatar>
                </Box>
                <Typography variant="h5" align="center" gutterBottom>
                  3. Resolve Your Matter
                </Typography>
                <Typography align="center">
                  Receive professional advice through your preferred consultation method
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;