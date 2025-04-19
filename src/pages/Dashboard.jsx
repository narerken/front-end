import { 
  Box, Container, Grid, Typography, Button, Card, CardContent, Avatar, 
  Paper, Stack, Chip, Fab, Modal, TextField, IconButton, Badge
} from '@mui/material';
import { 
  Gavel, Search, CalendarToday, Description, Payment, Star, 
  LocationOn, Chat as ChatIcon, Send, Close, Notifications,
  Person, Schedule, DocumentScanner
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);

  const recentCases = [
    { id: 1, title: 'Divorce Settlement', status: 'In Progress', date: '2023-05-15' },
    { id: 2, title: 'Property Dispute', status: 'Completed', date: '2023-03-22' },
    { id: 3, title: 'Contract Review', status: 'Pending', date: '2023-06-01' }
  ];

  const upcomingAppointments = [
    { id: 1, title: 'Consultation with Client', time: '10:00 AM', date: '2023-06-15' },
    { id: 2, title: 'Court Hearing', time: '2:30 PM', date: '2023-06-18' }
  ];

  const quickActions = [
    { icon: <Search fontSize="large" />, label: 'Find a Lawyer', path: '/lawyers' },
    { icon: <DocumentScanner fontSize="large" />, label: 'Document Review', path: '/documents' },
    { icon: <Gavel fontSize="large" />, label: 'New Case', path: '/cases/new' }, // Заменено с Case на Gavel
    { icon: <Schedule fontSize="large" />, label: 'Schedule Meeting', path: '/schedule' }
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Stack direction="row" spacing={2}>
          <Button 
            variant={activeTab === 'overview' ? 'contained' : 'text'} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </Button>
          <Button 
            variant={activeTab === 'cases' ? 'contained' : 'text'} 
            onClick={() => setActiveTab('cases')}
          >
            My Cases
          </Button>
          <Button 
            variant={activeTab === 'documents' ? 'contained' : 'text'} 
            onClick={() => setActiveTab('documents')}
          >
            Documents
          </Button>
          <Button 
            variant={activeTab === 'billing' ? 'contained' : 'text'} 
            onClick={() => setActiveTab('billing')}
          >
            Billing
          </Button>
        </Stack>
      </Box>

      {activeTab === 'overview' && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>Quick Actions</Typography>
            <Grid container spacing={2}>
              {quickActions.map((action, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      cursor: 'pointer',
                      '&:hover': { boxShadow: 6 }
                    }}
                    onClick={() => navigate(action.path)}
                  >
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Box sx={{ color: 'primary.main', mb: 1 }}>{action.icon}</Box>
                      <Typography>{action.label}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}

      {activeTab === 'overview' && (
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Upcoming Appointments</Typography>
            <Card>
              <CardContent>
                {upcomingAppointments.map((appointment) => (
                  <Box 
                    key={appointment.id} 
                    sx={{ 
                      p: 2, 
                      mb: 2, 
                      border: 1, 
                      borderColor: 'divider', 
                      borderRadius: 1,
                      '&:hover': { bgcolor: 'action.hover', cursor: 'pointer' }
                    }}
                  >
                    <Typography fontWeight="bold">{appointment.title}</Typography>
                    <Stack direction="row" spacing={2} mt={1}>
                      <Typography variant="body2" color="text.secondary">
                        <CalendarToday fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                        {appointment.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Schedule fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                        {appointment.time}
                      </Typography>
                    </Stack>
                  </Box>
                ))}
                <Button fullWidth variant="contained" sx={{ mt: 1 }}>Schedule New Appointment</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeTab === 'cases' && (
        <Box>
          <Typography variant="h5" gutterBottom>My Legal Cases</Typography>
          <Typography>Case management content would go here...</Typography>
        </Box>
      )}

      {activeTab === 'documents' && (
        <Box>
          <Typography variant="h5" gutterBottom>My Documents</Typography>
          <Typography>Document management content would go here...</Typography>
        </Box>
      )}

      {activeTab === 'billing' && (
        <Box>
          <Typography variant="h5" gutterBottom>Billing & Payments</Typography>
          <Typography>Billing information would go here...</Typography>
        </Box>
      )}

      <Fab
        color="primary"
        aria-label="chat"
        onClick={() => setChatOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          width: 60,
          height: 60
        }}
      >
        <ChatIcon />
      </Fab>

      <Modal open={chatOpen} onClose={() => setChatOpen(false)}>
        <Box sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          width: 350,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '70vh'
        }}>
          <Box sx={{ 
            p: 2, 
            bgcolor: 'primary.main', 
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '8px 8px 0 0'
          }}>
            <Typography>Legal Support</Typography>
            <IconButton color="inherit" onClick={() => setChatOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          
          <Box sx={{ p: 2, flexGrow: 1, overflowY: 'auto' }}>
            <Paper sx={{ p: 2, mb: 2, maxWidth: '80%' }}>
              <Typography>Hello! How can I help you today?</Typography>
              <Typography variant="caption" color="text.secondary">Support Agent • Just now</Typography>
            </Paper>
          </Box>
          
          <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton 
                    color="primary" 
                    disabled={!message.trim()}
                    onClick={() => setMessage('')}
                  >
                    <Send />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default Dashboard;
