import { Grid, Typography ,Box,Button, IconButton,Stack, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";
import Morocco from '../assets/images/pexels-stijn-dijkstra-1306815-30710160.jpg';
import Denver from '../assets/images/mark-basarab-V1h0v9Bi41k-unsplash.jpg';
import AirIcon from '@mui/icons-material/Air';
import signBoard from '../assets/images/direction-sign-board-1000x1000.png';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const MainGrid_5 = () => {
    return (
        <Grid container spacing={4} sx={{ m: '5%' ,px:0}} >
        <Grid size={6} sx={{ px: 5, py:0,display:'flex', backgroundColor:'white',justifyContent:'center',alignItems:'center',flexDirection:'column',
         

        }}>

        <Stack direction="column" spacing={1} sx={{mx:2,my:0,backgroundColor:"white",width:'45%',height:'100%',borderRadius:5,p:1,position:"relative",
           boxShadow:' rgba(0, 0, 0, 0.1) 0px 4px 12px',
           
            justifyContent:'center',
            alignItems:'center',
            }}  >
            <Box sx={{width:'94%',height:'25%',m:1,p:1,borderRadius:5,}}>

            <Stack direction="row" spacing={1} sx={{width:'100%',height:'100%',backgroundColor:'white',borderRadius:5,justifyContent:'center',alignItems:'center'}}>

            <Box sx={{width:'50%',height:'100%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <Typography sx={{ fontSize: { xs: 8, sm:10,md: 16 ,lg:36}, fontWeight: '800', color: 'text.primary', textAlign: 'left' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
            -12°<Typography sx={{ fontSize: { xs: 8, sm:10,md: 16 ,lg:36}, fontWeight: '800', color: '#94908f', textAlign: 'left' }}>C
            </Typography ></Typography>
            </Box>
            <Box sx={{width:'50%',height:'100%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Stack direction={"column"} spacing={0.5} sx={{width:'100%',height:'100%',backgroundColor:'white',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                    <Box sx={{width:'100%',height:'100%',borderRadius:5,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row',p:0.5}}>
                    <Box sx={{width:'50%',height:'100%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <AirIcon sx={{fontSize:{xs:8,sm:10,md:26},color:'primary.main'}}/>
                    </Box>
                    <Box sx={{width:'50%',height:'100%',borderRadius:5,display:'flex',justifyContent:'left',alignItems:'center',flexDirection:'column'}}>
                    <Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:16}, fontWeight: '800', color: '#94908f', textAlign: 'left' ,display:'flex',justifyContent:'left',alignItems:'center'}}>
                    Wind    </Typography>
<Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:16}, fontWeight: '800', color: 'text.primary', textAlign: 'left' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
    13 km    </Typography>
</Box>
                    </Box>
                    


                    <Box sx={{width:'100%',height:'100%',borderRadius:5,display:'flex',justifyContent:'flex-start',alignItems:'center',flexDirection:'row',p:0.5}}>
                    <Box sx={{width:'50%',height:'100%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <AcUnitIcon sx={{fontSize:{xs:8,sm:10,md:26},color:'primary.main'}}/>
                    </Box>
                    <Box sx={{width:'50%',height:'100%',borderRadius:5,display:'flex',justifyContent:'left',alignItems:'center',flexDirection:'column'}}>
                    <Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:16}, fontWeight: '800', color: '#94908f', textAlign: 'left' ,display:'flex',justifyContent:'left',alignItems:'center'}}>
                    Snow    </Typography>
<Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:16}, fontWeight: '800', color: 'text.primary', textAlign: 'left' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
    80 cm   </Typography>
</Box>
                    </Box>
                    
                    </Stack>
            </Box>

            </Stack>




            </Box>



            <Box sx={{width:'200%',height:'50%',backgroundColor:'white',zIndex:3,position:'relative',left:"0%",borderRadius:5,p:1,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'
            ,boxShadow:' rgba(0, 0, 0, 0.1) 0px 4px 12px'



            }}>
            <Card sx={{ width: '50%',maxHeight:'100%',background:'transparent',borderRadius:5}} elevation={0}>
      <CardActionArea sx={{p:0.5}}>
        <CardMedia
          component="img"
          height="140"
          image={Morocco}
          alt="Morocco"
          sx={{borderRadius:5}}

        />
        <CardContent  sx={{p:0.5}}>
          <Typography  component="div" sx={{ fontSize: { xs: 8, sm: 10, md: 16 }, fontWeight: '800', color: 'text.primary' }}>
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: '#94908f' }}>
            YVR--LAS--ABC
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width: '50%',maxHeight:'100%',background:'transparent',borderRadius:5}} elevation={0}>
      <CardActionArea sx={{p:0.5}}>
        <CardMedia
          component="img"
          height="140"
          image={Denver}
          alt="Morocco"
          sx={{borderRadius:5}}

        />
        <CardContent  sx={{p:0.5}}>
          <Typography  component="div" sx={{ fontSize: { xs: 8, sm: 10, md: 16 }, fontWeight: '800', color: 'text.primary' }}>
            Denver
          </Typography>
          <Typography variant="body2" sx={{ color: '#94908f' }}>
            YVR--LAS--ABC
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

            </Box>
         
            <Box sx={{width:'100%',height:'25%'}}>

            <Stack direction="row" spacing={0.5} sx={{width:'100%',height:'100%',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
            <Box sx={{width:'25%',height:'90%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',p:0.25}}>

            <Box sx={{width:'50%',height:'100%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <ThermostatIcon sx={{fontSize:{xs:8,sm:10,md:30},color:'primary.main'}}/>
                    </Box>
                    <Box sx={{width:'100%',height:'100%',borderRadius:5,display:'flex',justifyContent:'left',alignItems:'center',flexDirection:'column'}}>
                    <Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:15}, fontWeight: '600', color: 'text.primary', textAlign: 'left' ,display:'flex',justifyContent:'left',alignItems:'center'}}>
                    -12°C   </Typography>
<Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:10}, fontWeight: '500', color: '#94908f', textAlign: 'left' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
    Temp  </Typography>
</Box>




            </Box>
            <Box sx={{width:'25%',height:'90%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',p:0.25}}>

            <Box sx={{width:'50%',height:'100%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <WbSunnyIcon sx={{fontSize:{xs:8,sm:10,md:30},color:'primary.main'}}/>
                    </Box>
                    <Box sx={{width:'100%',height:'100%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:15}, fontWeight: '600', color: 'text.primary', textAlign: 'center' ,display:'flex',justifyContent:'left',alignItems:'center'}}>
                    13 km  </Typography>
<Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:10},fontWeight: '500', color: '#94908f', textAlign: 'left' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
Wind   </Typography>
</Box>




            </Box>
            <Box sx={{width:'25%',height:'90%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',p:0.25}}>

<Box sx={{width:'50%',height:'100%',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>
    <WaterDropIcon sx={{fontSize:{xs:8,sm:10,md:30},color:'primary.main'}}/>
        </Box>
        <Box sx={{width:'100%',height:'100%',borderRadius:5,display:'flex',justifyContent:'left',alignItems:'center',flexDirection:'column'}}>
        <Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:15}, fontWeight: '600', color: 'text.primary', textAlign: 'left' ,display:'flex',justifyContent:'left',alignItems:'center'}}>
        80 cm  </Typography>
<Typography sx={{ fontSize: { xs: 6, sm:8,md: 16,lg:10}, fontWeight: '500', color: '#94908f', textAlign: 'left' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
Snow  </Typography>
</Box>




</Box>

            </Stack>
            </Box>
         
           


        </Stack>





        </Grid>
        <Grid size={6} sx={{ px: 5, py:0,display:'flex',flexDirection:'column'}}>
        <Typography sx={{ fontSize: { xs: 8, sm:10,md: 24 ,lg:24}, fontWeight: '600', color:'#94908f', textAlign: 'left' }}>
            Get Connected</Typography>
            <Typography sx={{ fontSize: { xs: 15, sm:25,md: 50 ,lg:50}, fontWeight: '800', color:'text.primary', textAlign: 'left' }}>
            It is better to <br/>travel well than <br/>to arrive
            <Box component="img" src={signBoard} alt="signboard" sx={{ width: { xs: 15, sm:25,md: 50 ,lg:50}, height: { xs: 15, sm:25,md: 50 ,lg:50}, ml: 1 ,bottom:-4,position:'relative'}} />
            </Typography>
            <Typography sx={{ fontSize: { xs: 6, sm:8,md: 18 ,lg:18}, fontWeight: '600', color:'text.primary', textAlign: 'left' }}>
            Your Ultimate travel companion.<br/> that carries all the information you need <br/> while travelling.
            
            
            </Typography>
           <Stack direction="row" spacing={2} sx={{my:2}} >
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:{ xs: 100,sm:140, md: 200 }, height:{ xs: 50,sm:70, md: 80 },borderRadius:{xs:1,sm:2,md:4},backgroundColor:'yellow',p:0.5,background: 'linear-gradient(90deg,rgba(43, 248, 255, 1) 0%, rgba(121, 224, 83, 1) 25%, rgba(240, 213, 7, 1) 75%, rgba(237, 83, 104, 1) 100%)'}}>
                   <Box sx={{width:{ xs: 60,sm:80, md: 185 }, height:{ xs: 36,sm:52, md: 65 },borderRadius:{xs:1,sm:2,md:3},backgroundColor:'white',p:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                   <Box  component='img' sx={{width:{xs:16,sm:24,md:48}, height:"auto"}} src="https://img.icons8.com/fluency/48/google-play-store-new.png" alt="google-play-store-new"/>
                   <Box sx={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',m:1}}>
                   <Typography sx={{fontSize:{xs:6,sm:8,md:12},fontWeight:'600',color:'#94908f',textAlign:'left'}}>Get it from</Typography>
                    <Typography sx={{fontSize:{xs:8,sm:12,md:18},fontWeight:'800',color:'text.primary',textAlign:'left'}}>Google Play</Typography>
                    </Box>
                    </Box>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:{ xs: 100,sm:140, md: 200 }, height:{ xs: 50,sm:70, md: 80 },borderRadius:{xs:1,sm:2,md:4},backgroundColor:'yellow',p:0.5,background: 'linear-gradient(90deg,rgba(194, 194, 194, 1) 0%, rgba(48, 48, 48, 1) 100%)'}}>
                   <Box sx={{width:{ xs: 60,sm:80, md: 185 }, height:{ xs: 36,sm:52, md: 65 },borderRadius:{xs:1,sm:2,md:3},backgroundColor:'white',p:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Box  component='img' sx={{width:{xs:16,sm:24,md:48}, height:"auto"}} src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="apple-app-store-new"/>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',m:1}}>
                   <Typography sx={{fontSize:{xs:6,sm:8,md:12},fontWeight:'600',color:'#94908f',textAlign:'left'}}>Download on the</Typography>
                    <Typography sx={{fontSize:{xs:8,sm:12,md:18},fontWeight:'800',color:'text.primary',textAlign:'left'}}>Apple Store</Typography>
                    </Box>
                    </Box>
                </Box>
               


           </Stack>

        </Grid>
        </Grid>
    );
};

export default MainGrid_5;