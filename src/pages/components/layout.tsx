import Navbar from './navbar'
import { Box, Grid, Stack, Container } from '@mui/material'

export default function Layout({ children }: any) {
  return (
    <Box sx={{
      backgroundImage: 'url(/images/layout-bg.jpg)',
      backgroundPosition: '100%',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <Box sx={{
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(20px)',
      }}>
        <Box sx={{ p: theme => theme.spacing(6) }}>
          <Navbar />
          <Box sx={{ px: theme => theme.spacing(6) }}>{children}</Box>
        </Box>
      </Box>
    </Box >
  )
}