import MenuIcon from '@mui/icons-material/Menu';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import React from 'react'
import router from '../../router/router';
import { Link } from 'react-router-dom';
import { Button, AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material'


export const Header = () => {
  return (
    <>
      <Box disableGuters={true} sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              fontSize="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <OutdoorGrillIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Link to="/login" style={{ color: "#FFF", textDecoration: "none", margin: "10px" }}>
              <Button variant="outlined" color="inherit">
                <Diversity1Icon sx={{ marginRight: "10px" }} />
                Friends
              </Button>
            </Link>
            <Link to="/dashboard" style={{ color: "#FFF", textDecoration: "none" }}>
              <Button variant="outlined" color="inherit">
                <CalendarTodayIcon sx={{ marginRight: "10px" }} />
                Calendar
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
