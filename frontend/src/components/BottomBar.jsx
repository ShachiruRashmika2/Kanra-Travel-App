import {
    Grid,
    Typography,
    Box,
    Button,
    IconButton,
    Stack,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    OutlinedInput,
    InputAdornment,
    FormControl,
    InputLabel,
    Divider,
    Link,
} from "@mui/material";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import KenraLogo from '../assets/images/KanraLogoWhite.png';
import WooLogo from '../assets/images/woo.png';
import StripeLogo from '../assets/images/stripe.png';
import PayPalLogo from '../assets/images/toppng.com-aypal-logo-white-paypal-card-745x192.png';
import map from '../assets/images/map.png';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const BottomBar=()=>{


    return(
   
   
   <Grid container spacing={1} sx={{ my: '5%',mx:'2%' ,p:'2%' ,backgroundColor:'#1f0e85',borderRadius:{xs:'5px',sm:'10px',md:'20px'}}} data-aos="fade-up">

<Grid size={12} sx={{ p: 1,display:'flex',height:'30%',width:'100%'}}>
    <Stack direction="row" spacing={5} sx={{width:'100%',justifyContent:'center',alignItems:'center',p:0.5}}>
    <Stack direction="row" spacing={2} sx={{justifyContent:{xs:'center',sm:'space-between'},alignItems:'center',width:'100%',px:2}}>
<Typography sx={{ fontSize: { xs: 8, sm:8,md: 12 ,lg:15}, fontWeight: '600', color: 'text.secondary', textAlign: 'left', my: 2 }}>Leading the way <br/>in adventure</Typography>
<Stack direction="row" spacing={1}>
      <IconButton size="small" sx={{ color: 'white' }}>
        <SportsVolleyballIcon   sx={{fontSize: { xs: 10, sm:14,md: 18,lg:24},}}/>
      </IconButton>
      <IconButton size="small" sx={{ color: 'white' }}>
        <YouTubeIcon   sx={{fontSize: { xs: 10, sm:14,md: 18,lg:24},}}/>
      </IconButton>
      <IconButton size="small"sx={{ color: 'white' }}>
        <InstagramIcon   sx={{fontSize: { xs: 10, sm:14,md: 18,lg:24},}}/>
      </IconButton>
      <IconButton size="small" sx={{ color: 'white' }}>
        <TwitterIcon   sx={{fontSize: { xs: 10, sm:14,md: 18,lg:24},}}/>
      </IconButton>
    </Stack>
    </Stack>

    






    </Stack>
    <Divider orientation="vertical" flexItem sx={{ borderColor: 'white', mx: 2 }} />
    <Stack direction="row" spacing={5} sx={{width:'100%',justifyContent:'center',alignItems:'center',p:0.5}}>
    <Stack direction="row" spacing={2} sx={{justifyContent:{xs:'center',sm:'space-between'},alignItems:'center',width:'100%',px:0.5}}>
<Typography sx={{ fontSize: { xs: 8, sm:10,md: 14 ,lg:14}, fontWeight: '600', color: 'text.secondary', textAlign: 'left', my: 2 }}>Join our<br/>news letter</Typography>
<FormControl
  variant="outlined"
  sx={{
    
    width: { xs: '90%', sm: '60%', md: '40%' },

    color: 'white',
   
  }}
>
  <InputLabel
    htmlFor="outlined-adornment-email"
    sx={{
      color: 'text.secondary',
      fontSize: { xs:8, sm:12, md: 15 },
      '&.Mui-focused': {
        color: 'white',
      },
    }}
  >
    Your E-mail
  </InputLabel>

  <OutlinedInput
    id="outlined-adornment-email"
    label="Your E-mail"
    sx={{
      
      borderRadius: 3,
      color: 'text.secondary',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
      fontSize: { xs:8, sm:15}
    }}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="submit"
          
          sx={{
            borderRadius: 3,
            color: 'white',
            backgroundColor: 'primary.main',
            width: { xs:3, sm: '40px' },
            height: { xs:3, sm: '40px' },
            p: 1,
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          <KeyboardArrowRightRoundedIcon fontSize="small" sx={{ fontSize: { xs: 5, sm: '1rem' }}}/>
        </IconButton>
      </InputAdornment>
    }
  />
</FormControl>

    </Stack> 

    






    </Stack>

    
</Grid>
<Box sx={{ width: '100%', my: -3 }}>
  <Box component="hr" sx={{ border: 'none', height: '1px', backgroundColor: 'white' }} />
</Box>

<Grid size={12} sx={{ p: 1,display:'flex',height:'50%',justifyContent:'space-between',alignItems:'center',color:'white'}}>


<Grid item xs={12} md={2} sx={{display:'flex',justifyContent:'left',alignItems:'center',flexDirection:'column'}}>
          <Box component={'img'} src={KenraLogo} sx={{width:{xs:60,md:100},mb:1}}/>
          <Box sx={{position:'relative'}}><Box component="img" src={map} alt="Map" sx={{ mt: 1, width:{xs:50,sm:65,md:100} }}/>
          <Box sx={{position:'absolute',zIndex:2,top:{xs:'18%',sm:'30%'},left:{xs:'22%',sm:'36%'}}}>
          <IconButton
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              width: { xs: 10, sm: 20, md: 20 },
              height: { xs: 10, sm: 20, md: 20 },
              
             
              boxShadow: '0px 4px 20px rgba(17, 12, 46, 0.2)',
              transition: 'all 0.3s ease-in-out',
              border:'2px solid white',
             

            
              
              '&:hover': {backgroundColor:'primary.main', color:'white',animation:'bounce 1s ease-in-out forwards'},
            }}
            size="large"
          >
            <LocationPinIcon sx={{fontSize:{xs:7,sm:10,md:12,lg:15}}} />
          </IconButton>
          
          </Box>
         
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography sx={{fontSize: { xs: 10, sm:10,md: 14 ,lg:14}, fontWeight: '600',mb:1}}>Contact</Typography>
          <Typography sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}><EmailIcon  sx={{ mr: 1 ,fontSize: { xs: 10, sm:10,md: 13,lg:13},}} />getemail@kanra.com</Typography>
          <Typography sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}><LocalPhoneIcon  sx={{ mr: 1 ,fontSize: { xs: 10, sm:10,md: 13,lg:13},}} />(270) 555-0117</Typography>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography sx={{fontSize: { xs: 10, sm:10,md: 14 ,lg:14}, fontWeight: '600',mb:1}}>Company</Typography>
          <Link href="#" color="inherit" underline="hover" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}>Career</Link><br />
          <Link href="#" color="inherit" underline="hover" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}>Developers</Link><br />
          <Link href="#" color="inherit" underline="hover" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}>Our Story</Link>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography sx={{fontSize: { xs: 10, sm:10,md: 14 ,lg:14}, fontWeight: '600',mb:1}}>Kanra</Typography>
          <Link href="#" color="inherit" underline="hover" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}>Why Kanra</Link><br />
          <Link href="#" color="inherit" underline="hover" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}>Customer</Link><br />
          <Link href="#" color="inherit" underline="hover" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}>Press Info</Link>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography sx={{fontSize: { xs: 10, sm:10,md: 14 ,lg:14}, fontWeight: '600',mb:1}}>Resources</Typography>
          <Link href="#" color="inherit" underline="hover" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}>Career</Link><br />
          <Link href="#" color="inherit" underline="hover" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}>About Us</Link><br />
          <Link href="#" color="inherit" underline="hover" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13}, fontWeight: '400'}}>Features</Link>
        </Grid>

    
</Grid>
<Box sx={{ width: '100%', mt: 3 }}>
  <Box component="hr" sx={{ border: 'none', height: '1px', backgroundColor: '#ccc' }} />
</Box>
<Grid size={12} sx={{ p: 1,display:'flex',height:'20%',justifyContent:'space-between',color:'white',my:0,flexWrap: 'wrap' }}>
     
            <Typography variant="body2" sx={{fontSize: { xs: 10, sm:10,md: 13,lg:13},}}>© 2023 <strong>Rylic Studio</strong> | All Rights Reserved</Typography>
            <Box>
              <Box component="img" src={StripeLogo} alt="Stripe" sx={{ height: {xs:15,md:20}, mx: 1 }} />
              <Box component="img" src={PayPalLogo} alt="PayPal" sx={{ height: {xs:15,md:20}, mx: 1 }} />
              <Box component="img" src={WooLogo} alt="WooCommerce" sx={{ height: {xs:15,md:20}, mx: 1 }} />
            </Box>
          
</Grid>

</Grid>



    )
}


export default BottomBar; 