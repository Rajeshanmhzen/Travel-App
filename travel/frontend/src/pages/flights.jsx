import React from "react";
import { Grid, Box, Container } from '@mui/material';
import Image1 from "../assets/flight_photo/image1.png";
import Image2 from "../assets/flight_photo/image2.png";
import Image3 from "../assets/flight_photo/image3.png";
import Image4 from "../assets/flight_photo/image4.png";
import Image5 from "../assets/flight_photo/image5.png";
import Image6 from "../assets/flight_photo/image6.png";
import Image7 from "../assets/flight_photo/image7.png";
import Image8 from "../assets/flight_photo/image8.png";
import Image9 from "../assets/flight_photo/image9.png";
import Image10 from "../assets/flight_photo/image10.png";
import Image11 from "../assets/flight_photo/image11.png";
import Image12 from "../assets/flight_photo/image12.png";
import Image13 from "../assets/flight_photo/image13.png";
import Image14 from "../assets/flight_photo/image14.png";
import Image15 from "../assets/flight_photo/image15.png";
import Image16 from "../assets/flight_photo/image16.png";
import FlightCard from "../Components/FlightCard";


const Flights = () => {
    const flights = [
        { id: 1, destination: "New York", subtitle: "An amazing journey", price: 720, imagePath: Image1 },
        { id: 2, destination: "Paris", subtitle: "City of lights", price: 850, imagePath: Image2 },
        { id: 3, destination: "Tokyo", subtitle: "Explore the future", price: 1200, imagePath: Image3 },
        { id: 4, destination: "Bali", subtitle: "Island paradise", price: 930, imagePath: Image4 },
        { id: 5, destination: "London", subtitle: "Historic adventure", price: 680, imagePath: Image5 },
        { id: 6, destination: "Dubai", subtitle: "Luxury getaway", price: 890, imagePath: Image6 },
        { id: 7, destination: "Rome", subtitle: "Ancient wonders", price: 750, imagePath: Image7 },
        { id: 8, destination: "Sydney", subtitle: "Coastal beauty", price: 1350, imagePath: Image8 },
        { id: 9, destination: "Barcelona", subtitle: "Artistic escape", price: 630, imagePath: Image9 },
        { id: 10, destination: "Cape Town", subtitle: "Natural majesty", price: 970, imagePath: Image10 },
        { id: 11, destination: "Bangkok", subtitle: "Exotic adventure", price: 780, imagePath: Image11 },
        { id: 12, destination: "Rio", subtitle: "Vibrant culture", price: 920, imagePath: Image12 },
        { id: 13, destination: "Santorini", subtitle: "Island dreams", price: 870, imagePath: Image13 },
        { id: 14, destination: "Marrakech", subtitle: "Desert magic", price: 740, imagePath: Image14 },
        { id: 15, destination: "Vancouver", subtitle: "Natural beauty", price: 690, imagePath: Image15},
        { id: 16, destination: "Singapore", subtitle: "Modern marvel", price: 950, imagePath: Image16 }
      ];
  return (
    <div className="mt-20">
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
      <Grid container spacing={2} sx={{ py: 4 }}>
        {flights.map((flight) => (
          <Grid 
            item 
            key={flight.id} 
            xs={12}     // 1 card per row on extra-small screens (mobile)
            sm={6}      // 2 cards per row on small screens (tablets)
            md={4}      // 3 cards per row on medium screens (desktops)
            lg={3}      // 4 cards per row on large screens
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '90%', md: '95%' }, maxWidth: 380 }}>
              <FlightCard 
              type="flight"
                destination={flight.destination} 
                subtitle={flight.subtitle} 
                price={flight.price} 
                imagePath={flight.imagePath} 
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default Flights;
