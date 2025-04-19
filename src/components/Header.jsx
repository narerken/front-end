import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    Stack,
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Divider,
    Badge
} from '@mui/material';
import {
    Menu as MenuIcon,
    AccountCircle,
    Notifications,
    Chat
} from '@mui/icons-material';
import { useState } from 'react';

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="sticky"
            elevation={1}
            sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Left side - Logo and Navigation */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            textDecoration: 'none',
                            color: 'dark.main',
                            fontWeight: 700,
                            letterSpacing: 0.5
                        }}
                    >
                        LegalConnect
                    </Typography>

                    {user && (
                        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                component={Link}
                                to="/dashboard"
                                sx={{ color: 'text.primary' }}
                            >
                                Dashboard
                            </Button>
                            <Button
                                component={Link}
                                to="/lawyers"
                                sx={{ color: 'text.primary' }}
                            >
                                Find Lawyers
                            </Button>
                        </Stack>
                    )}
                </Box>

                {/* Right side - Auth/Actions */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {user ? (
                        <>
                            <IconButton color="inherit">
                                <Badge badgeContent={3} color="error">
                                    <Notifications />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <Badge badgeContent={1} color="error">
                                    <Chat />
                                </Badge>
                            </IconButton>

                            <IconButton
                                onClick={handleMenu}
                                color="inherit"
                                sx={{ p: 0 }}
                            >
                                <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main' }}>
                                    {user.name ? user.name.charAt(0) : <AccountCircle />}
                                </Avatar>
                            </IconButton>

                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        minWidth: 200,
                                        mt: 1.5,
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                    },
                                }}
                            >
                                <MenuItem onClick={() => navigate('/profile')}>
                                    <AccountCircle sx={{ mr: 1 }} /> My Profile
                                </MenuItem>
                                <MenuItem onClick={() => navigate('/settings')}>
                                    <AccountCircle sx={{ mr: 1 }} /> Account Settings
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={() => { logout(); navigate('/'); }}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button
                                component={Link}
                                to="/"
                                sx={{
                                    color: 'text.primary',
                                    display: { xs: 'none', sm: 'block' }
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                component={Link}
                                to="/about"
                                sx={{
                                    color: 'text.primary',
                                    display: { xs: 'none', sm: 'block' }
                                }}
                            >
                                About
                            </Button>
                            <Button
                                component={Link}
                                to="/login"
                                variant="outlined"
                                sx={{
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    '&:hover': {
                                        borderColor: 'primary.dark'
                                    }
                                }}
                            >
                                Sign In
                            </Button>
                            <Button
                                component={Link}
                                to="/register"
                                variant="contained"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: 'primary.dark'
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </>
                    )}

                    {/* Mobile menu button */}
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;