import { Box, Card, CardContent, CardMedia, Typography, Grid, Chip } from "@mui/material";
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

export default function CardGrid() {
    return (
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
    );
}
