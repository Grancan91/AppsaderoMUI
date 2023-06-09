import MenuIcon from "@mui/icons-material/Menu";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import React from "react";
import router from "../../router/router";
import { Link } from "react-router-dom";
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";


export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="secondary"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <IconButton
            fontSize="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <OutdoorGrillIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Copyright © 2023 Chuletapp Company. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
