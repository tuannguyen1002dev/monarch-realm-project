import Navbar from './navbar'
import { Box, Grid, Stack, Container } from '@mui/material'

export default function Layout({ children }: any) {
  return (
    <Box sx={{
      backgroundImage: 'url(/images/layout-bg.jpg)',
      backgroundPosition: 'center',
      backgroundSize: '150% 100%',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <Box className="layout-bg" sx={{
        height: 'inherit',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(20px)',
      }}>
        <Box sx={{
          p: theme => theme.spacing(6),
          height: 'inherit',
          display: 'flex',
          flexFlow: 'column',
        }}>
          <Navbar />
          <Box sx={{
            p: theme => theme.spacing(6),
            flex: '1 1 auto!important',
          }}>{children}</Box>
        </Box>
      </Box>
    </Box >
  )
}