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
    Avatar,Chip

} from "@mui/material";
import amazon from '../assets/images/toppng.com-amazon-name-with-orange-smile-2048x1536.png';
import oyo from '../assets/images/OYO_Rooms_(logo).png';
import airbnb from '../assets/images/toppng.com-airbnb-logo-2000x625.png';
import tripadvisor from '../assets/images/toppng.com-tripadvisor-enables-resellers-and-agencies-to-offer-tripadvisor-llc-1043x161.png';
import expedia from '../assets/images/toppng.com-expedia-logo-1024x290.png';
import fedex from '../assets/images/toppng.com-fedex-logo-5231x1680.png';
import Wing from "../assets/images/pexels-jaison-j-samuel-317255142-31714222.jpg";
import Canada from "../assets/images/pexels-mvdheuvel-2676841.jpg";
import Algeria from "../assets/images/pexels-mohamedelaminemsiouri-2245436.jpg";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const logos = [
    { name: 'amazon', src: amazon },
    { name: 'OYO', src: oyo },
    { name: 'airbnb', src: airbnb },
    { name: 'tripadvisor', src: tripadvisor },
    { name: 'expedia', src: expedia },
    { name: 'fedex', src: fedex },
];



const MainGrid_7 = () => {
    return (
        <Grid 
            container 
            spacing={2} 
            sx={{ m: '5%', px: 0,mt:10, }} data-aos="zoom-in"
        >
            <Grid 
                size={12} 
                sx={{ 
                    px: 5, 
                    py: 0, 
                    display: 'flex', 
                   
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexDirection: { xs: 'column', sm: 'row'}
                }}
            >
                 
                <Grid 
                size={6} 
                sx={{ 
                    px: 2,
                    display: 'flex', 
                
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexDirection: 'column' ,
                    
                    height:'100%',
                    width:'100%'
                }}
            >
<Box sx={{display:'flex',width:'100%',height:'max-content',justifyContent:'center',alignItems:'center',flexDirection:'row',position:'relative'}}>
<Card
                                            sx={{
                                                borderRadius: '50%',
                                                top:{xs:-50,sm:-60,md:-70, lg: -70 },
                                                left:{xs:50,sm:40,md:40, lg: 0 },
                                              
                                                position: "relative",
                                              
                                                height: {xs: 100,sm:100,md:150, lg: 200 },
                                                width:{xs: 100,sm:100,md:150, lg: 200 },
                                                m:1,overflow:'visible',
                                                '&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        },
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height='100%'
                                                width='100%'
                                                image={Wing}
                                                alt='Nowhare'
                                                sx={{ borderRadius: '50%',
                                                objectFit:'cover' }}
                                
                                            />
                                            <Chip
                                                label="wing"
                                                color="primary"
                                                icon={<LocationPinIcon  />}
                                                size="small"
                                                sx={{
                                                    position: "absolute",
                                                    top: 16,
                                                    fontSize:{xs:5,sm:10,md:12,lg:15},
                                                    backgroundColor: "white",
                                                    color: "text.primary",
                                                    fontWeight: "bold",
                                                    '& .MuiChip-icon': {
                                                        color: 'primary.main', 
                                                      }
                                                }}
                                            />
                                        </Card>
                                      <Card
                                            sx={{
                                                borderRadius: '50%',
                                                height: {xs: 70,sm:80,md:120, lg: 150 },
                                                width:{xs: 70,sm:80,md:120, lg: 150 },
                                                position: "relative",
                                                left:{xs:24,sm:10,md:15, lg: -15 },
                                               
                                                m:1,
                                            
                                                overflow:'visible'
                                                ,
                                                '&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        },
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height='100%'
                                                width='100%'
                                                image={Canada}
                                                alt='canada'
                                                sx={{ borderRadius: '50%',
                                                    objectFit:'cover' }}
                                            />
                                            <Chip
                                                label="Canada"
                                                color="primary"
                                                icon={<LocationPinIcon  />}
                                                size="small"
                                                sx={{
                                                    position: "absolute",
                                                    top: 16,
                                                   fontSize:{xs:5,sm:10,md:12,lg:15},
                                                    backgroundColor: "white",
                                                    color: "text.primary",
                                                    fontWeight: "bold",
                                                    '& .MuiChip-icon': {
                                                        color: 'primary.main', 
                                                      }
                                                }}
                                            />
                                        </Card>
                                          <Card
                                            sx={{
                                                borderRadius: '50%',
                                               
                                                position: "relative",
                                                left:{xs:-103,sm:-138,md:-190, lg: -265},
                                                top:{xs:22,sm:20,md:40, lg: 70 },
                                                height: {xs: 40,sm:50,md:70, lg: 100 },
                                                width:{xs: 40,sm:50,md:70, lg: 100 },
                                                m:1,
                                               overflow:'visible',
                                                '&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        },
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height='100%'
                                                width='100%'
                                                image={Algeria}
                                                alt='Algeria'
                                                sx={{ borderRadius: '50%',
                                                    objectFit:'cover' }}
                                            />
                                            <Chip
                                                label="Algeria"
                                                color="primary"
                                                icon={<LocationPinIcon  />}
                                                size="small"
                                                sx={{
                                                    position: "absolute",
                                                    top: 16,
                                                    fontSize:{xs:5,sm:10,md:12,lg:15},
                                                    backgroundColor: "white",
                                                    color: "text.primary",
                                                    fontWeight: "bold",
                                                    '& .MuiChip-icon': {
                                                        color: 'primary.main', 
                                                      }
                                                }}
                                            />
                                        </Card>
 


</Box>
                

                
            </Grid>

<Grid 
                size={6} 
                sx={{ 
                    p: 2, 
                     
                    display: 'flex', 
                    
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexDirection: 'row' 
                }}
            >

<Stack direction="row" spacing={1} sx={{justifyContent:'center',alignItems:'center',height:'100%'}}>
<Box sx={{display:'flex',flexDirection:'column'}}>
                  <Typography
                    sx={{ 
                        fontSize: { xs: 12, sm: 12, md: 18, lg: 22 }, 
                        fontWeight: '800', 
                        color: 'text.primary', 
                        textAlign: 'left', 
                        my: 2 
                    }}>

                        Their service is absolutely wonderful and<br/>
                        cheaper than the hotel direct or any other<br/>
                        booking site. You got back to us stright away<br/>
                        and no issues at all in the other end. 
                    </Typography>
                 <Box sx={{ width: '100%', my: 1 }}>
                 <Stack direction="row" spacing={1} sx={{justifyContent:'left'}}>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/31826001/pexels-photo-31826001/free-photo-of-expressive-portrait-of-woman-in-berlin-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   sx={{ width: {xs:20,sm:20,md:40,lg:56}, height:{xs:20,sm:20,md:40,lg:56},'&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        }, }}/>
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/31817405/pexels-photo-31817405/free-photo-of-portrait-of-a-smiling-woman-on-brown-background.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{ width: {xs:20,sm:20,md:40,lg:56}, height:{xs:20,sm:20,md:40,lg:56},'&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        }, }}/>
      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/31782837/pexels-photo-31782837/free-photo-of-vibrant-portrait-of-woman-with-pink-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{ width: {xs:20,sm:20,md:40,lg:56}, height:{xs:20,sm:20,md:40,lg:56},'&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        }, }}/>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{ width: {xs:20,sm:20,md:40,lg:56}, height:{xs:20,sm:20,md:40,lg:56},'&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        }, }} />
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{ width: {xs:20,sm:20,md:40,lg:56}, height:{xs:20,sm:20,md:40,lg:56},'&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        }, }}/>
      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{ width: {xs:20,sm:20,md:40,lg:56}, height:{xs:20,sm:20,md:40,lg:56},'&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        }, }}/>
      <Box  sx={{ width: {xs:20,sm:20,md:40,lg:56}, height:{xs:20,sm:20,md:40,lg:56},justifyContent:'center',alignItems:'center',display:'flex',mx:{md:2,xs:4}}}>
      <IconButton aria-label="right" sx={{borderRadius:'50%',border:'2px solid #08012e',color:'text.primary',p:{xs:0}}} size="large"  >
               
      <KeyboardArrowRightRoundedIcon  sx={{
      fontSize: { xs: 20, sm: 20, md: 35 }
    }}/>
      </IconButton></Box>
      
    </Stack>

                    
                    </Box>  
                  </Box>
               
                  <Box sx={{  my: 1,display:'flex' ,mx:2,justifyContent:'center',alignItems:'center',flexDirection:'column',minHeigh:100,top:{xs:-80,sm:-100,md:-120},position:'relative'}}>
                  <IconButton aria-label="Quate"  sx={{backgroundColor:'white',color:"text.primary",boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'}} size="large"   >
                  <FormatQuoteRoundedIcon  sx={{
      fontSize: { xs: 20, sm: 20, md: 25 }
    }}/>
 
</IconButton>
                  </Box>
</Stack>
                  
                    
            </Grid>
                    


            </Grid>
            <Grid 
                size={12} 
                sx={{ 
                    px: {sm:0,md:5}, 
                    py: 0, 
                    display: 'flex', 
                   
                    justifyContent: "space-between",
                    alignItems: 'center', 
                    flexDirection: 'row' 
                }}
            >
                {logos.map((logo, index) => (
                    <Box 
                        key={index} 
                        component='img' 
                        src={logo.src} 
                        alt={logo.name} 
                        sx={{ width:{lg:150,md:120,sm:100,xs:50}, height:'auto', m: 1, objectFit: 'contain',filter: 'grayscale(1)' ,'&:hover': { filter: 'grayscale(0)',animation:'bounce 1s ease-in-out forwards' } }} 
                    />
                ))}
            </Grid>
            <Box sx={{ width: '100%', my: 2 }}>
            <hr />
        </Box>
        </Grid>
    );
};

export default MainGrid_7;