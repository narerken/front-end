import { Box, Container, Typography, Button, Grid, Paper, Stack } from '@mui/material';
import { Gavel, People, Description, Phone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const features = [
    {
      icon: <Gavel fontSize="large" color="primary" />,
      title: "Verified Legal Experts",
      description: "Network of 500+ pre-vetted lawyers with minimum 5 years experience"
    },
    {
      icon: <Phone fontSize="large" color="primary" />,
      title: "Multiple Consultation Formats",
      description: "Video calls, phone consultations, or secure messaging"
    }
  ];

  return (
    <Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 12,
          pb: 8,
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              letterSpacing: 0.5
            }}
          >
            Expert Legal Assistance On Demand
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 4 }}
          >
            Connect with top-rated lawyers for personalized legal advice
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/register')}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 6
          }}
        >
          Why Choose Our Platform
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  align="center"
                  color="text.secondary"
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {!user && (
        <Box
          sx={{
            bgcolor: 'background.default',
            py: 8,
            borderTop: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Ready for Legal Assistance?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ mb: 4 }}
            >
              Register today
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/register')}
              >
                Sign Up
              </Button>
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default Home;