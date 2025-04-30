import { Grid, Typography ,Box,Button, IconButton} from "@mui/material"
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { Card, CardContent, CardMedia, Chip } from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import Vanice from '../assets/images/pexels-pixabay-417344.jpg';
import Iceland from '../assets/images/pexels-rudy-kirchner-278171-831056.jpg';
import Moab from '../assets/images/pexels-brianna-eisman-547922903-23629489.jpg';
import Arizona from '../assets/images/pexels-austin-sullivan-48171954-13594168.jpg';


const places = [
    { title: "Venice", image: Vanice },
    { title: "Iceland", image: Iceland },
    { title: "Moab", image: Moab },
    { title: "Arizona", image: Arizona }
   

];


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
        <Box sx={{ flexGrow: 1, padding: 4, overflow: 'hidden' }}>
            <Grid
                container
                spacing={4}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    overflow: "hidden",
                    width: 'max-content',
                    padding: 2,
                    alignItems: "flex-end",
                }}
            >
                {places.map((place, index) => (
                    <Grid item key={place.title}>
                        <Card
                            sx={{
                                borderRadius: 4,
                                position: "relative",
                                height: index % 2 === 0 ? 300 : 250,
                                width: 300
                            }}
                        >
                            <CardMedia
                                component="img"
                                height={index % 2 === 0 ? "300" : "250"}
                                width={300}
                                image={place.image}
                                alt={place.title}
                            />
                            <Chip
                                label={place.title}
                                color="primary"
                                icon={<LocationPinIcon />}
                                size="small"
                                sx={{
                                    position: "absolute",
                                    top: 16,
                                    [index % 2 === 0 ? "left" : "right"]: 16,
                                    backgroundColor: "white",
                                    color: "text.primary",
                                    fontWeight: "bold",
                                    '& .MuiChip-icon': {
                                        color: 'primary.main',
                                    }
                                }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </Grid>
        <Box sx={{ width: '100%', my: 2 }}>
            <hr />
        </Box>
        </Grid>
    );
};

export default MainGrid4;