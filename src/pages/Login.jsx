import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Stack, 
  Divider,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { 
  Email, 
  Lock, 
  Visibility, 
  VisibilityOff,
  Google,
  Facebook
} from '@mui/icons-material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          boxShadow: 1
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
          Sign In
        </Typography>
        
        {error && (
          <Typography color="error" align="center" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <TextField
          fullWidth
          label="Email Address"
          margin="normal"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Password"
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          my: 2
        }}>
          <FormControlLabel
            control={
              <Checkbox 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
            <Typography variant="body2" color="primary">
              Forgot password?
            </Typography>
          </Link>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={loading}
          sx={{ mt: 2, py: 1.5 }}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </Button>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" color="text.secondary">
            OR CONTINUE WITH
          </Typography>
        </Divider>

        <Stack direction="row" spacing={2}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            sx={{ py: 1.5 }}
          >
            Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Facebook />}
            sx={{ py: 1.5 }}
          >
            Facebook
          </Button>
        </Stack>

        <Typography align="center" sx={{ mt: 3 }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Typography component="span" color="primary">
              Sign up
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;