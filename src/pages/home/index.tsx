import React, { useEffect, useState } from 'react'
import {
  Grid,
  Typography,
  Button,
  Box,
  Avatar,
  Stack,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Collapse
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          backgroundColor: '#000'
        }

      }

    },
  },
  palette: {
    mode: 'dark',
  },
});


export default function Home() {
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        <Grid xs={3} sx={{ height: '100%' }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(200,200,200,0.1)',
              borderRadius: '15px',
              p: theme => theme.spacing(3)
            }}>
            <Stack direction="column" spacing={3}>
              <Typography variant="h6" fontWeight="bold" color="text.secondary">
                Categories
              </Typography>
              <List sx={{ width: '100%', '*': { borderRadius: '15px!important' } }}>
                {[0, 1, 2, 3].map((value) => {
                  const labelId = `checkbox-list-label-${value}`;
                  return (
                    <ListItem sx={{ direction: 'rtl' }}
                      key={value}
                      disablePadding>
                      <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Stack>
          </Box>
        </Grid>
        <Grid xs={9}>
          tuan
        </Grid>
      </Grid >
    </ThemeProvider>
  )
}
