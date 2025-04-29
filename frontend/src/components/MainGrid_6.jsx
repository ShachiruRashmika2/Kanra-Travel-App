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
} from "@mui/material";
import FlightIcon from '@mui/icons-material/Flight';
import Ticket from '../assets/images/Ticket.png';
import Map from "../assets/images/vecteezy_national-map-world_37135749.png";
import Plane from "../assets/images/plane.png";
import Bag from "../assets/images/anyrgb.com.png";
import Hawks from "../assets/images/Hawks.png";

const MainGrid6 = () => {
    return (
        <Grid
            container
            spacing={1}
            sx={{ my: "5%", mx: "2%", px: 0, backgroundColor: "#1f0e85", borderRadius: { xs: "5px", sm: "10px", md: "20px" ,position:'relative',zIndex:-1,overflow:'visible'} }}
        >
           <Box
        sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundImage: `url(${Map})`,
            backgroundSize: "60%",

            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: -1,

        
            maskImage: "linear-gradient(to left, black, transparent)",
           
         
        }}
    />
            <Grid
                size={2}
                sx={{ px: 0, py: 4, display: "flex", justifyContent:'flexend', alignItems: "flex-start", flexDirection: "column" ,overflow:'hidden'}}
            >
                <img src={Ticket} alt="ticket" style={{ width: "70%", height: "auto", objectFit: "cover",position:'relative',left:-64,bottom:-100}} />
            </Grid>
            <Grid
                size={3}
                sx={{ px: 5, py: 4, display: "flex",justifyContent:'flexend', alignItems: "flex-start", flexDirection: "column" }}
            >
                <Button
                    variant="contained"
                    sx={{ color: 'text.primary', background: '#00bcd4', textTransform: 'none', fontWeight: 500 }}
                    endIcon={<FlightIcon />}
                >
                    Get Tickets
                </Button>
                <Typography
                    sx={{ fontSize: { xs: 14, sm: 20, md: 45 }, fontWeight: "400", color: "text.secondary", textAlign: "left", mt: 2,mb:0, lineHeight: 1.2 }}
                >
                    Find the <br />best <strong style={{fontWeight:800}}>deals</strong>
                   
                </Typography>
            </Grid>
            <Grid
                size={4}
                sx={{ px: 5, py: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",overflow:'visible' }}
            >
              <Box
        sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "visible", // only this box allows overflow
        }}
    >
        <img
            src={Plane}
            alt="plane"
            style={{
                width: "120%",
                height: "auto",
                objectFit: "cover",
                position: "absolute",
                filter: "drop-shadow(0px 60px 30px rgba(0, 0, 0, 0.8))",
                zIndex: 4,
                transform: "rotate(-20deg)",
            }}
        />
    </Box>
            </Grid>
            <Grid
                size={3}
                sx={{ px: 5, display: "flex", justifyItems:'center', alignItems:'center', flexDirection: "column",overflow :'hidden'}}
            >
                 <Box sx={{ width: "100%",display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
               <Typography sx={{ fontSize: { xs: 8, sm: 10, md: 18 }, fontWeight: "800", color: "text.secondary", textAlign: "left", mt:5}}>
                Sponsored by-
                </Typography>
                <img src={Hawks} alt="sponsot" style={{ width: "30%", height: "auto", objectFit: "cover"}} /></Box>
                <Box sx={{ width: "100%",height:'30%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={Bag} alt="bag" style={{ width: "60%", height: "auto", objectFit: "cover",position:'relative',bottom:-66}} />  
                </Box>
              
                
            </Grid>
        </Grid>
    );
};

export default MainGrid6;