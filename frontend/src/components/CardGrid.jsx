import { Box, Card, CardContent, CardMedia, Typography, Grid, Chip } from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import Vanice from '../assets/images/pexels-mohamedelaminemsiouri-2245436.jpg';
const places = [
    { title: "Venice", image: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { title: "Iceland", image: Vanice },
    { title: "Moab", image: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { title: "Arizona", image: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
     ,{ title: "Arizona", image: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=t"}

];

export default function CardGrid() {
    return (
        <Box sx={{flexGrow: 1, padding: 4, overflowX: 'auto', overflowY: 'hidden'}}>
            <Grid
                container
                spacing={4}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    overflowY: "hidden",
                    width:'max-content',
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
                                height: index % 2 === 0 ? 250 : 300,
                                width:300
                            }}
                        >
                            <CardMedia
                                component="img"
                                height={index % 2 === 0 ? "250" : "300"} 
                                width={300}
                                image={place.image}
                                alt={place.title}
                            />
                            <Chip
                                label={place.title}
                                color="primary"
                                icon={<LocationPinIcon  />}
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
    );
}
