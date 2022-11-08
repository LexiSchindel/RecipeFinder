import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import './NavBar.css'

const pages: {label: string; path: string}[] = [{label: 'About', path: '/'}, {label: 'Blarg', path: '/blarg'}];

function NavBar() {
  let navigate = useNavigate(); 
    const routeChange = (path: string) =>{
        navigate(path);
    }

  return (
    <AppBar position="static">
      <div className={'nav-container'}>
        <div>LOGO</div>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
            <Button
            key={page.label}
            onClick={() => routeChange(page.path)}
            // sx={{ my: 2, color: 'white', display: 'block' }}
            >
            {page.label}
            </Button>
        ))}
        </Box>
      </div>
    </AppBar>
  );
}
export default NavBar;