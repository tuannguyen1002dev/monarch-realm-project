import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Toolbar, Typography, Button, Box, Avatar } from '@mui/material'
import { Stack } from '@mui/system';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Navbar() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={3} color="secondary.light">
          <ShoppingCartOutlinedIcon />
          <Avatar>H</Avatar>
        </Stack>
      </Toolbar>
    </ThemeProvider>
  );
}