import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import KrnraLogo1 from '../assets/images/KanraLogo1.png';

const pages = ['Reviews', 'Destinations', 'Tickets', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const woblleKeyFrames= `@keyframes slideIn {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
  }
`
function ResponsiveAppBar() {
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{paddingLeft:'8%', paddingRight:'8%', height: {
        xs: 50,
        sm: 60, 
        md: 70, 
        lg: 80, 
      },
      background:'transparent',
      }}>
      <Container maxWidth="xl" sx={{height: '100%',borderBottom:'2px solid #D3D3D3'}}>
        <Toolbar disableGutters sx={{height: '100%',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,justifyContent:'center',alignItems:'center',height: '100%',flexGrow: 1 }}>
         <img src={KrnraLogo1} alt='logo' style={{width:'200px'}}/>
            </Box>
         
         

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
             
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none',justifyContent:'center',alignItems:'center' }, mr: 1 }}>
          <img alt='logo' src={KrnraLogo1} style={{width:'120px'}}/>
          </Box>


          <Box sx={{ display: { xs: 'none', md: 'flex',justifyContent:'center',alignItems:'center' }, mr: 2,flexgrow:2 }}>
          <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: {md:300,sm:100} ,boxShadow:' (3px 23px 40px 23px rgba(71,68,68,0.16))'}}
    >
     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
     <SearchTwoToneIcon
  sx={{
    color: 'primary.main',        
    '& .MuiSvgIcon-root': {      
      color: 'secondary',      
    },
  }}
/>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Destinations..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
     
   
    </Paper></Box>
        
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } ,ml:8}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block',fontSize: { md: 18},fontWeight:'600',color:'text.primary',textTransform:'none',pb:0
              ,'&:hover .underline': { animation: 'wobble 1s ease-in-out infinite',display:'block' },
              
              }}
                variant='text'
                
                
              >
                {page}
                <Box sx={{p:0,height:'2px',width:'20%',backgroundColor:'primary.main',borderRadius:'5px',position:'absolute',left:'45%',
                    display:'none'
                }} className='underline'>
   
  </Box>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1}}>
          <Button
               
                sx={{ my: 2, display: 'block',fontSize: {xs: 8, sm: 12, md: 16},fontWeight:'bold',mx:1,boxShadow:' 2px 0px 24px 5px rgba(255, 88, 4, 0.26)',height: {xs: 30, sm: 40, md: 60},width:{xs: 100, sm: 120, md: 150},borderRadius:'15px'}}
                variant='contained'
                color='primary'
               
              
                
              >
                Get The App
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;