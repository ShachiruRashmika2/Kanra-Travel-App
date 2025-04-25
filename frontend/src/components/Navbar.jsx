import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import kanraLogo1 from '../assets/images/kanraLogo1.png';




const NavBar = () => {

    return (
        <Box sx={{ width: '100%' }}>
           
            <Tabs>
                <img src={kanraLogo1} alt="Kanra Logo" style={{ width: '120px' ,height:'80px'}} />
                <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" />
            </Tabs>
            <hr />
        </Box>
    );
}

export default NavBar;