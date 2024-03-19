'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Link, List, ListItem } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Image from 'next/image';
import Logo from '@/assets/logo/networker-logo.png'
import darkLogo from '@/assets/logo/networker-logo-dark.png'
import { ThemeContext } from '@/Contexts/ThemeContextProvider';

export default function Header() {

    const [navItems, setNavItems] = React.useState([])

    const { mode, updateThemeMode } = React.useContext(ThemeContext)

    React.useEffect(() => {
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => setNavItems(data?.categories))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ boxShadow: 'none' }} color={'primary'} className='header'>
                <Container maxWidth={'lg'} disableGutters>
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box display={'flex'} alignItems={'center'} gap={5}>
                            <IconButton
                                size="large"
                                edge="end"
                                color="text.primary"
                                aria-label="menu"
                                sx={{ padding: '0' }}
                            >
                                <MenuIcon className='hover:text-[#818181] duration-300' />
                            </IconButton>

                            <Link href={'/'}>
                                <Image src={mode === 'light' ? Logo.src : darkLogo.src} alt='' width={140} height={25}></Image>
                            </Link>

                            <List disablePadding sx={{ display: 'flex', gap: '30px' }}>
                                {navItems.map((item, idx) => (
                                    <ListItem key={idx} disablePadding className='header-li'>
                                        <Link href={'#'} underline='none' color={'text.primary'}>
                                            {item}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>


                        <Box display={'flex'} alignItems={'center'}>
                            <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => updateThemeMode(mode === 'light' ? 'dark' : 'light')}>
                                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                            </IconButton>
                            <Button color="inherit">Login</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}