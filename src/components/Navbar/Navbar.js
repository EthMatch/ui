import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { makeStyles } from '@mui/styles'
import Logo from '../../assets/images/ethlogo.webp'
import meta from '../../assets/images/meta.svg'
const useStyles = makeStyles({
  headBtn: {
    padding: '7.5px 16px !important',
    marginRight: '4px',
    color: 'white !important',
    fontSize: '15px !important',
    fontFamily: 'Valo !important',
    // '&:hover': { borderBottom: '2px solid red' },
  },
  activeHead: {
    padding: '7.5px 16px !important',
    marginRight: '4px',
    color: 'white !important',
    fontSize: '15px !important',
    fontFamily: 'Valo !important',
    borderBottom: '2px solid #ff4655 !important',
  },
  metz: {
    width: '50px',
    height: '30px',
    verticalAlign: 'middle',
  },
  walletBtn: {
    lineHeight: '16px',
    float: 'right !important',
    color: 'white !important',
    fontSize: '14px !important',
    background: `transparent !important`,
    borderRadius: '12px !important',
    padding: '8px 16px',
    fontFamily: 'Valo !important',
    border: '2px solid #ff4655 !important',
    '&:hover': {
      border: '2px solid blue !important',
    },
  },
  logo: {
    width: '20px',
    marginRight: '6px',
    height: '25px',
    verticalAlign: 'middle',
  },
})

const ResponsiveAppBar = () => {
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [active, setActive] = useState('lobbies')

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position='static' sx={{ backgroundColor: 'black' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: '500',
              fontSize: '16px',
              letterSpacing: '4px',
              alignItems: 'center',
              fontFamily: 'Valo',
            }}
          >
            <img src={Logo} className={classes.logo} alt='logo ' />
            eThmatch
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
                <Button>Lobbies</Button>
              </MenuItem>
              <MenuItem>
                <Button>Games</Button>
              </MenuItem>
              <MenuItem>
                <Button>Matches</Button>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontWeight: '500',
              fontSize: '16px',
              letterSpacing: '4px',
              alignItems: 'center',
              fontFamily: 'Valo',
            }}
          >
            <img src={Logo} className={classes.logo} style={{}} alt='logo ' />
            eThmatch
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              className={
                active === 'lobbies' ? classes.activeHead : classes.headBtn
              }
              onClick={() => {
                setActive('lobbies')
              }}
            >
              Lobbies
            </Button>

            <Button
              className={
                active === 'games' ? classes.activeHead : classes.headBtn
              }
              onClick={() => {
                setActive('games')
              }}
            >
              Games
            </Button>

            <Button
              className={
                active === 'matches' ? classes.activeHead : classes.headBtn
              }
              onClick={() => {
                setActive('matches')
              }}
            >
              Matches
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button className={classes.walletBtn}>
              <img src={meta} className={classes.metz}></img>
              <Typography
                variant='p'
                sx={{
                  fontSize: '0.5rem',
                  display: { xs: 'none', md: 'block' },
                }}
              >
                Connect To Wallet
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
