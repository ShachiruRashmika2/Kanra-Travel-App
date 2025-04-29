import { Grid, Typography ,Box,Button, IconButton,Stack} from "@mui/material";


import signBoard from '../assets/images/direction-sign-board-1000x1000.png';

const MainGrid_5 = () => {
    return (
        <Grid container spacing={4} sx={{ m: '5%' ,px:0}} >
        <Grid size={6} sx={{ px: 5, py:0,display:'flex',justifyContent:'space-between', backgroundColor:'primary.main'}}>a</Grid>
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