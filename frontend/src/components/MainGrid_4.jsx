import { Grid, Typography ,Box,Button, IconButton} from "@mui/material"
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { Card, CardContent, CardMedia, Chip } from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import Vanice from '../assets/images/pexels-pixabay-417344.jpg';
import Iceland from '../assets/images/pexels-rudy-kirchner-278171-831056.jpg';
import Moab from '../assets/images/pexels-brianna-eisman-547922903-23629489.jpg';
import Arizona from '../assets/images/pexels-austin-sullivan-48171954-13594168.jpg';
import { useRef } from "react";

const places = [
    { title: "Venice", image: Vanice },
    { title: "Iceland", image: Iceland },
    { title: "Moab", image: Moab },
    { title: "Arizona", image: Arizona }
   

];


const MainGrid4 = () => {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
      if (scrollRef.current) {
        const amount = direction === "left" ? -320 : 320;
        scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
      }
    };

    return (
        <Grid container spacing={0} sx={{ m: '5%' ,px:0,py:1,width:{xs:'90%',md:'100%'}}} data-aos="fade-up" >
        <Grid size={12} sx={{ px: 5, py:0,display:'flex',justifyContent:'space-between'}}>
            <Typography sx={{ fontSize: { xs: 12, sm:18,md: 24 ,lg:25}, fontWeight: '800', color: 'text.primary', textAlign: 'left', my: 2 }}>
                Discover the touch of nature 🌈
                </Typography>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <IconButton aria-label="left" sx={{borderRadius:'50%',border:'2px solid #08012e',color:'text.primary',mx:2}} size="small" onClick={()=>scroll("left")} >
                    <KeyboardArrowLeftRoundedIcon/>
      
      </IconButton>
      <IconButton aria-label="right" sx={{borderRadius:'50%',border:'2px solid #08012e',color:'text.primary',mx:2}} size="small" onClick={() => scroll("right")}>
      <KeyboardArrowRightRoundedIcon />
      </IconButton>
                </Box>
        </Grid>
        <Grid size={12} sx={{ px:{xs:0}, py:0,display:'flex'}}>
        <Box sx={{ flexGrow: 1, padding: 4, overflow: 'auto',scrollbarWidth: "none",   
    "&::-webkit-scrollbar": {       
      display: "none"
    } }} ref={scrollRef}>
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
                    <Grid item key={place.title} >
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