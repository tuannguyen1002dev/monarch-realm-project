import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Toolbar, Typography, Button, Box, Avatar, Stack } from '@mui/material'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Navbar() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#616161',
        main: '#424242',
        dark: '#212121',
      },
      text: {
        primary: '#9e9e9e',
        secondary: '#424242',
      }
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Toolbar sx={{ flex: '0 1 auto!important' }}>
        <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={3} sx={{ flexGrow: 1 }}>
          <Typography variant="body1" component="div" color="text.primary" fontWeight="bold">
            Home
          </Typography>
          <Typography variant="body1" component="div" color="text.primary" fontWeight="bold">
            Game Store
          </Typography>
          <Typography variant="body1" component="div" color="text.primary" fontWeight="bold">
            News
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={3} color="secondary.light">
          <ShoppingCartOutlinedIcon />
          <Avatar>H</Avatar>
        </Stack>
      </Toolbar>
    </ThemeProvider>
  );
}