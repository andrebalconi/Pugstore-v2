
import { AppBar, Toolbar, Typography } from "@mui/material"
import { IconButton } from "@mui/material";


type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

export default function NavBar({ toggleDarkMode, darkMode }: Props) {
    return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Pug-Store   
            </Typography>
            <IconButton onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </IconButton>
      </Toolbar>
    </AppBar>
  )
}