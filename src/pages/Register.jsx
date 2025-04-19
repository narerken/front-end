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
  Checkbox,
  FormControl,
  FormHelperText,
  FormControlLabel
} from '@mui/material';
import { 
  Person, 
  Email, 
  Lock, 
  Visibility, 
  VisibilityOff,
  Google,
  Facebook
} from '@mui/icons-material';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!termsAccepted) newErrors.terms = 'You must accept the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    
    try {
      await register(formData);
      navigate('/dashboard');
    } catch (err) {
      setErrors({ server: err.message || 'Registration failed. Please try again.' });
      console.error('Registration error:', err);
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
          Create Account
        </Typography>
        
        {errors.server && (
          <Typography color="error" align="center" sx={{ mb: 2 }}>
            {errors.server}
          </Typography>
        )}

        <TextField
          fullWidth
          label="Full Name"
          name="name"
          margin="normal"
          required
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Email Address"
          name="email"
          margin="normal"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
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
          name="password"
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          required
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password || 'Minimum 8 characters'}
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

        <TextField
          fullWidth
          label="Confirm Password"
          name="confirmPassword"
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />

        <FormControl error={!!errors.terms} sx={{ mt: 2 }}>
          <FormControlLabel
            control={
              <Checkbox 
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                I agree to the{' '}
                <Link to="/terms" style={{ textDecoration: 'none' }}>
                  <Typography component="span" color="primary">
                    Terms of Service
                  </Typography>
                </Link>{' '}
                and{' '}
                <Link to="/privacy" style={{ textDecoration: 'none' }}>
                  <Typography component="span" color="primary">
                    Privacy Policy
                  </Typography>
                </Link>
              </Typography>
            }
          />
          {errors.terms && <FormHelperText>{errors.terms}</FormHelperText>}
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={loading}
          sx={{ mt: 3, py: 1.5 }}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </Button>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" color="text.secondary">
            OR SIGN UP WITH
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
          Already have an account?{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Typography component="span" color="primary">
              Sign in
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;