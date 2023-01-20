import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dreygur from '../../../assets/dreygur.png';
import './Header.css';


const pages = [
    {
        title: 'About Me',
        route: '/about'
    },
    {
        title: 'Contact',
        route: '/contact'
    },
    {
        title: 'Resume',
        route: '/resume'
    },
    {
        title: 'Projects',
        route: '/projects'
    }
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ backgroundColor: '#03294B' }} position="fixed" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, idx) => (
                                <MenuItem sx={{ textDecoration: { xs: 'none', md: 'none', lg: 'underline' } }} key={idx} onClick={handleCloseNavMenu}>
                                    <Link to={page.route} >{page.title}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: { lg: 1 }, textAlign: { xs: 'right', md: 'right', lg: 'left' } }}>
                        <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'flex' } }}>
                            <Link to='/'>
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar sx={{ height: { xs: '30px', lg: '50px' }, width: { xs: '30px', lg: '50px' } }} alt="Remy Sharp" src={dreygur} />
                                </IconButton>
                            </Link>
                            <Link to='/'>
                                <h2 className='name lg:text-3xl mt-2 pl-3 hover:cursor-pointer'>Rakibul Yeasin</h2>
                            </Link>
                        </Box>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, idx) => (
                            <Button
                                key={idx}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', textDecoration: { xs: 'none', md: 'none', lg: 'underline' }, "&:hover": { textDecoration: { xs: 'none', md: 'none', lg: 'underline' }, backgroundColor: 'transparent' } }}
                            >
                                <Link className='underlie' to={page.route}>{page.title}</Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;