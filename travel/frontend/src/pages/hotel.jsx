import React from 'react'
import HotelPageComponent from '../Components/HotelPageComponent'
import { Box, Container, Grid } from '@mui/material'
import Hotel from "../assets/hotel.jpg"
import { FaTv,FaWifi } from "react-icons/fa6";
import { PiShowerBold } from "react-icons/pi";

const hotel = () => {
  const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='w-full mt-10'>
      <Container maxWidth={false} >
      <Grid container  sx={{ py: 4 }}>
        {arr.map((flight) => (
          <Grid 
            item 
            key={flight.id} 
            xs={12}     // 1 card per row on extra-small screens (mobile)
            sm={6}      // 2 cards per row on small screens (tablets)
            md={4}      // 3 cards per row on medium screens (desktops)
            lg={4}      // 4 cards per row on large screens
          >
            <Box sx={{ width: { xs: '100%', sm: '100%', md: '100%' },  }}>
            <HotelPageComponent
                img={Hotel}
                title={"The Royal Hotel Japan"}
                available={"yes"}
                amount={1200000}
                wifiIcon={<FaWifi/>}
                tvIcon={<FaTv/>}
                showerIcon={<PiShowerBold/>}
                />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  )
}

export default hotel