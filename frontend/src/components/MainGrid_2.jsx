import { Grid,Typography,Box,Button, Avatar, AvatarGroup } from "@mui/material";


const MainGrid_2 = () => {


return (
    <Grid container spacing={2} sx={{ m: '5%', px: '5%', alignItems: 'center', justifyContent: 'center' }} data-aos="fade-up">
        <Grid item xs={12} sm={6} md={4} sx={{ p: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection: 'column' }}>
            <AvatarGroup max={4}>
                <Avatar
                    alt="img_1"
                    src="https://images.pexels.com/photos/14520051/pexels-photo-14520051.jpeg?auto=compress&cs=tinysrgb&w=600"
                    sx={{
                        '&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        },
                    }}
                />
                <Avatar
                    alt="img_2"
                    src="https://images.pexels.com/photos/2415938/pexels-photo-2415938.jpeg?auto=compress&cs=tinysrgb&w=600"
                    sx={{
                        '&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        },
                    }}
                />
                <Avatar
                    alt="img_3"
                    src="https://images.pexels.com/photos/17052555/pexels-photo-17052555/free-photo-of-portrait-of-man-in-hiking-jacket.jpeg?auto=compress&cs=tinysrgb&w=600"
                    sx={{
                        '&:hover': {
                            animation: 'bounce 0.5s ease-in-out',
                        },
                    }}
                />
                <Avatar alt="etc"><Typography fontSize={14} sx={{fontWeight:'700',color:'text.primary'}}>+2K</Typography></Avatar>
            </AvatarGroup>
            <Box sx={{width:'100%',alignItems:'center',justifyContent:'left',display:'flex'}}>

            <Typography sx={{ position:'relative',fontSize: { xs: 11,sm:12, md: 16 }, fontWeight: '900', color: 'text.primary', textAlign: 'left', py: 2 }}>
                Travelled more than <br />
                2000 places 🏖️</Typography>

            </Box>
           
        </Grid>
    </Grid>
);





}


export default MainGrid_2;