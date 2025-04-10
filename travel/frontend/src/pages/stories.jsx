import React from 'react'
import Image1 from "../assets/flight_photo/image1.png"
import Image2 from "../assets/flight_photo/image2.png"
import Image3 from "../assets/flight_photo/image3.png"
import Buddha from "../assets/Buddha.png"
import { Container, Grid, Box} from '@mui/material'
import FlightCard from '../Components/FlightCard'
import NewCard from '../Components/newCard'

const Stories = () => {
    const flights = [
            { id: 1, destination: "Amazing horse ride with soul mate",  imagePath: Image1 },
            { id: 2, destination: "The cold ice bath in Sweden", imagePath: Image2 },
            { id: 3, destination: "The unforgettable camping night",  imagePath: Image3 },    
          ];

     const news = [
                  { 
                    id: 1, 
                    location:"Kathmandu, Nepal",
                    date:"March 06, 2025",
                    readTime:"5",
                    heading:"this is a heading",
                    title:"The Unexpected Guide",
                    imagePath:Buddha ,
                  },
                    { 
                      id: 2, 
                      location:"Kathmandu, Nepal",
                      date:"March 06, 2025",
                      readTime:"5",
                      heading:"this is a heading",
                      title:"The Unexpected Guide",
                      imagePath: Buddha 
                    },
                    { 
                      id: 3, 
                      location:"Kathmandu, Nepal",
                      date:"March 06, 2025",
                      readTime:"5",
                      heading:"this is a heading",
                      title:"The Unexpected Guide",
                      imagePath: Buddha 
                    },
                    { 
                      id: 4, 
                      location:"Kathmandu, Nepal",
                      date:"March 06, 2025",
                      realTime:"5",
                      heading:"this is a heading",
                      title:"The Unexpected Guide",
                      imagePath: Buddha 
                    },
                    { 
                      id: 5, 
                      location:"Kathmandu, Nepal",
                      date:"March 06, 2025",
                      readTime:"5",
                      heading:"this is a heading",
                      title:"The Unexpected Guide",
                      imagePath: Buddha 
                    },
                    { 
                      id: 6, 
                      location:"Kathmandu, Nepal",
                      date:"March 06, 2025",
                      realTime:"5",
                      heading:"this is a heading",
                      title:"The Unexpected Guide",
                      imagePath: Buddha 
                    },

                                   
       ];
  return (
    <div>
        <div className=" w-full min-h-100vh mt-20">
              <Container maxWidth={false} >
              <Grid container spacing={2} sx={{ py: 4 }}>
                {flights.map((flight) => (
                  <Grid 
                    item 
                    key={flight.id} 
                    xs={12}     // 1 card per row on extra-small screens (mobile)
                    sm={6}      // 2 cards per row on small screens (tablets)
                    md={4}      // 3 cards per row on medium screens (desktops)
                    lg={4}      // 4 cards per row on large screens
                    sx={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ width: { xs: '100%', sm: '90%', md: '95%' }, maxWidth: 400 }}>
                      <FlightCard
                        destination={flight.destination} 
                        imagePath={flight.imagePath} 
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
            <div>
                <h2 className='text-5xl font-semibold my-2'>Top Travel Stories</h2>
                <div className='mt-10'>
                <Container maxWidth={false}>
              <Grid container sx={{ py: 4 }} >
                {news.map((newsItem) => (
                  <Grid
                    item 
                    key={newsItem.id} 
                    xs={12}     // 1 card per row on extra-small screens (mobile)
                    sm={12}      // 2 cards per row on small screens (tablets)
                    md={6}      // 3 cards per row on medium screens (desktops)
                    lg={6}      // 4 cards per row on large screens
                  >
                    <Box sx={{ width: { xs: '100%', sm: '90%', md: '95%' }, maxWidth: 600 }}>
                      <NewCard
                        imagePath={newsItem.imagePath} 
                        heading={newsItem.heading}
                        title={newsItem.title}
                        date={newsItem.date}
                        realTime={newsItem.readTime}
                        location={newsItem.location}
                      />
                    </Box>
                  </Grid>
                 
                ))}
              </Grid>
            </Container>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Stories