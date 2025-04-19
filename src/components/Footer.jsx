import { Box, Container, Typography } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 4,
        borderTop: '1px solid #e0e0e0',
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          {/* Left side - Branding */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              LegalHelp
            </Typography>
            <Typography variant="body2">
              Professional legal consultation platform
            </Typography>
          </Box>

          {/* Right side - Contact Info */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Email fontSize="small" />
              <Typography variant="body2">
                contact@narxoz.kz
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Phone fontSize="small" />
              <Typography variant="body2">
                +7 (777) 777-7777
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn fontSize="small" />
              <Typography variant="body2">
                Zhandosova 55, Almaty
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ 
          mt: 3, 
          pt: 2, 
          borderTop: '1px solid #e0e0e0',
          textAlign: 'center'
        }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} LegalHelp. the_Era_of_Eradication.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;