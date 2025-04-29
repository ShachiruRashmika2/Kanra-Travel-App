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

import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

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
            sx={{ m: '5%', px: 0,mt:10 }}
        >
            <Grid 
                size={12} 
                sx={{ 
                    px: 5, 
                    py: 0, 
                    display: 'flex', 
                   
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexDirection: 'row' 
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
                    
                    height:400
                }}
            >
<Box sx={{display:'flex',width:'100%',height:'max-content',justifyContent:'center',alignItems:'center',flexDirection:'column',position:'relative'}}>
<Card
                                            sx={{
                                                borderRadius: '50%',
                                               
                                                position: "absolute",
                                                left:100,
                                                height: 200,
                                                width:200,
                                                m:1,overflow:'visible'
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height={200} 
                                                width={200}
                                                image={amazon}
                                                alt='amazon'
                                            />
                                            <Chip
                                                label="amazon"
                                                color="primary"
                                                icon={<FormatQuoteRoundedIcon  />}
                                                size="small"
                                                sx={{
                                                    position: "absolute",
                                                    top: 16,
                                                   
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
                                                height: 150,
                                                width:150,
                                                m:1,
                                                top:90,
                                                right:-90
                                                ,overflow:'visible'
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height={150} 
                                                width={150}
                                                image={amazon}
                                                alt='amazon'
                                            />
                                            <Chip
                                                label="amazon"
                                                color="primary"
                                                icon={<FormatQuoteRoundedIcon  />}
                                                size="small"
                                                sx={{
                                                    position: "absolute",
                                                    top: 16,
                                                   
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
                                                height: 100,
                                                width:100,
                                                m:1,
                                                top:50,
                                                right:0,overflow:'visible'
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height={100} 
                                                width={100}
                                                image={amazon}
                                                alt='amazon'
                                            />
                                            <Chip
                                                label="amazon"
                                                color="primary"
                                                icon={<FormatQuoteRoundedIcon  />}
                                                size="small"
                                                sx={{
                                                    position: "absolute",
                                                    top: 16,
                                                   
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


                  <Box sx={{display:'flex',flexDirection:'column'}}>
                  <Typography
                    sx={{ 
                        fontSize: { xs: 8, sm: 12, md: 18, lg: 22 }, 
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
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"   sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56} }}/>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56} }}/>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56} }}/>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56} }} />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56} }}/>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56} }}/>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: {xs:16,sm:20,md:40,lg:56}, height:{xs:16,sm:20,md:40,lg:56} }}/>
      
    </Stack>

                    
                    </Box>  
                  </Box>
               
                  <Box sx={{  my: 1,display:'flex' ,mx:2,justifyContent:'center',alignItems:'center',flexDirection:'column',height:'100%'}}>
                  <IconButton aria-label="fingerprint"  sx={{backgroundColor:'white',color:"text.primary",boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',position:'relative',top:-130}} size="large"   >
                        <FormatQuoteRoundedIcon/>
 
</IconButton>
                  </Box>
                    
            </Grid>
                    


            </Grid>
            <Grid 
                size={12} 
                sx={{ 
                    px: 5, 
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
                        sx={{ width: '150px', height: '150px', m: 1, objectFit: 'contain',filter: 'grayscale(1)' }} 
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default MainGrid_7;