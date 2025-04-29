import { Grid, Typography ,Box,Button, IconButton} from "@mui/material"
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import CardGrid from "./cardGrid";
const MainGrid4 = () => {
    return (
        <Grid container spacing={0} sx={{ m: '5%' ,px:0,py:1}} >
        <Grid size={12} sx={{ px: 5, py:0,display:'flex',justifyContent:'space-between'}}>
            <Typography sx={{ fontSize: { xs: 8, sm:12,md: 20 ,lg:25}, fontWeight: '800', color: 'text.primary', textAlign: 'left', my: 2 }}>
                Discover the touch of nature 🌈
                </Typography>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <IconButton aria-label="right" sx={{borderRadius:'50%',border:'2px solid #08012e',color:'text.primary',mx:2}} size="small"  >
                    <KeyboardArrowLeftRoundedIcon/>
      
      </IconButton>
      <IconButton aria-label="left" sx={{borderRadius:'50%',border:'2px solid #08012e',color:'text.primary',mx:2}} size="small" >
      <KeyboardArrowRightRoundedIcon />
      </IconButton>
                </Box>
        </Grid>
        <Grid size={12} sx={{ px: 5, py:0,display:'flex'}}>
       <CardGrid/>
        </Grid>
        <Box sx={{ width: '100%', my: 2 }}>
            <hr />
        </Box>
        </Grid>
    );
};

export default MainGrid4;