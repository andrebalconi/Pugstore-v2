
import { AppBar, Toolbar, Typography } from "@mui/material"
import { IconButton } from "@mui/material";
import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { List } from "@mui/material";
import { Badge } from "@mui/material";
import { Box } from "@mui/material";


const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

const navStyles = {
    
    color: 'inherit', 
    typography: 'h6', 
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {color: '#baecf9'}
                    
}

type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

export default function NavBar({ toggleDarkMode, darkMode }: Props) {
    return (
    <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <Box display='flex' alignItems='center'>
                <Typography component={NavLink} to="/" variant="h6" sx={navStyles}>
                    Pug-Store   
                </Typography>
                <IconButton onClick={toggleDarkMode}>
                    {darkMode ? <Typography>Light Mode</Typography> : <Typography>Dark Mode</Typography>}
                </IconButton>
            </Box>            
            
            <List sx={{ display: 'flex' }}>
                {midLinks.map(({ title, path }) => (
                <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}                    
                >
                    {title.toUpperCase()}
                </ListItem>
            ))}
            </List>

            <Box display='flex' alignItems='center'>
                <IconButton size="large">
                    <Badge badgeContent='4' color="secondary">
                        <Typography>Cart</Typography>
                    </Badge>
                </IconButton>

                <List sx={{ display: 'flex' }}>
                    {rightLinks.map(({ title, path }) => (
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
                </List>
            </Box>
                                
      </Toolbar>
    </AppBar>
  )
}