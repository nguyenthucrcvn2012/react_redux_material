import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import * as path from '../../config/path';
import {Link, useNavigate} from 'react-router-dom';
import { checkLogin } from '../../helper';

export default function Topbar() {

    const navigate = useNavigate();

    const submitLogout = (e) => {
        e.preventDefault();
        navigate(path.LOGIN);
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {
              checkLogin ? 
                <Button color="inherit" onClick={submitLogout} >Đăng xuất</Button>
              : 
                <Link component="button" color="inherit" to={path.LOGIN}>Đăng nhập</Link>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
