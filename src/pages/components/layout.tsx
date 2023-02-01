import Navbar from './navbar'
import { Box, Grid, Stack } from '@mui/material'

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
        <Navbar />
        <main>{children}</main>
      </Box>
    </Box >
  )
}