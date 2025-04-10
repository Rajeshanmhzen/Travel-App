import React from "react";
import CarouselForHome from "../components/CarouselForHome";
import FlightAndStays from "../components/FlightAndStays";
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import { FaArrowRight } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Button from "@mui/material/Button";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "../../public/Cards/Card1.png";
import TestimonialCard from "../Components/testimonialCard";
import AccordionUsage from "../Components/Accordion";

const Home = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <div className="px-10 rounded-2xl mt-17">
        <div className="relative">
          <CarouselForHome />
          <div className="">
            <FlightAndStays />
          </div>
        </div>
      </div>

      <div className="px-12">
        <div className="mt-10 ">
          <div className="justify-between items-center flex">
            <h2 className="xs:text-2xl sm:text-4xl font-semibold ml-8 md:text-5xl ">
              The most popular destinations
            </h2>
            <div className="text-[20px] ">
              <Link>
                <Button sx={{ color: "black" }} endIcon={<FaArrowRight />}>
                  See more
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Container maxWidth={"xl"}>
              <Grid container spacing={3} sx={{ mt: 1, mb: 1 }}>
                {arr.map((_, index) => (
                  <Grid
                    item
                    key={index}
                    xs={12} // 1 card per row on extra-small screens (mobile)
                    sm={6} // 2 cards per row on small screens (tablets)
                    md={4} // 3 cards per row on medium screens (desktops)
                    lg={3} // 4 cards per row on large screens
                  >
                    <Box sx={{ width: "100%", height: "100%" }}>
                      <DestinationCard
                        destination="Sweden"
                        properties="773"
                        imagePath={Image}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
        </div>

        {/* Get inspirtaion for your next trip start from here  */}
        <div className="mt-10 ">
          <h2 className="xs:text-2xl sm:text-4xl font-semibold ml-8 md:text-5xl ">
            Get inspiration for your next trip
          </h2>
          <div>
            <Container maxWidth={"xl"}>
              <Grid container spacing={3} sx={{ mt: 1, mb: 1 }}>
                {arr.slice(0, 3).map((_, index) => (
                  <Grid
                    item
                    key={index}
                    xs={12} // 1 card per row on extra-small screens (mobile)
                    sm={6} // 2 cards per row on small screens (tablets)
                    md={4} // 3 cards per row on medium screens (desktops)
                    lg={4} // 4 cards per row on large screens
                  >
                    <Box sx={{ width: "100%", height: "100%" }}>
                      <Card
                        sx={{
                          borderRadius: "15px",
                          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                          position: "relative",
                          overflow: "hidden",
                          width: "100%",
                        }}
                      >
                        {/* Image with Heart Icon */}
                        <CardMedia
                          component="img"
                          height="150"
                          image={Image}
                          alt={"image"}
                          sx={{
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                          }}
                        />

                        {/* Card Content (Text) */}
                        <CardContent sx={{}}>
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            The top 10 most visited famous cities in the world
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Get the unbeatable experience visiting the best and
                            most visited cities of the world.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
        </div>
        {/* Get inspirtaion for your next trip end from here  */}

        {/* Book and flight section start here */}
        <div className="mt-10">
          <Container sx={{ m: 0 }} maxWidth={"xl"}>
            <h2 className="xs:text-2xl sm:text-4xl font-semibold mb-4 md:text-5xl ">
              Book your Flights and Hotels
            </h2>
            <Grid container spacing={3}>
              {arr.slice(0, 2).map((card, index) => (
                <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                  <Card
                    sx={{
                      borderRadius: "15px",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {/* Background Image */}
                    <CardMedia
                      component="img"
                      image={Image}
                      alt={"image"}
                      sx={{
                        height: 300, // Adjusted for better appearance
                        objectFit: "cover",
                      }}
                    />

                    {/* Overlay Content */}
                    <CardContent
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        color: "white",
                        padding: "20px",
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        Flight
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        Search and book your suitable flights for your
                        destination
                      </Typography>
                      <Box sx={{ mt: 2, textAlign: "center" }}>
                        <Button variant="contained" startIcon={<IoSend />}>
                          Show flight
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
        {/* Book and flight section end here */}

        {/* testimonial start from here */}
        <Container className="mt-10" maxWidth={"xl"}>
          <TestimonialCard />
        </Container>
        {/* testimonial end from here */}

        {/* exploring things start from here*/}
        <div className=" mt-10 bg-blue-300 rounded-xl p-4">
          <Container>
            <Grid container spacing={2} alignItems={"center"} maxWidth={"xl"}>
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography variant="h3">
                    Travel is the only thing you buy that makes you richer
                  </Typography>
                  <Typography variant="body2" sx={{ margin: "15px 0" }}>
                    Travel is the only thing you buy that makes you richer
                  </Typography>
                  <Button
                    endIcon={<FaArrowRight />}
                    color="black"
                    sx={{ cursor: "pointer" }}
                  >
                    Learn more
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/c20b/7279/4082dfae8cf6610391e4e7e6a2236656?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XqHNbzlvDQrQLFwVpOCUbdygBTN7bq-la~NfvSan~mlTKZf341i60LtWYT-3HB7E7VV9UKOybO4rQrQvKAR4GOoChN~SEhAx0zNFfXOpYU1siNk2wmIuf6Uv5KebjgIPNyRKWgf4UpV1bAoB9pthGGHNKX0FoNeYQDHoltzrMsInOAIemdNM-hwgpHbYZVhvbTkuJ0oZ4chwnj1qoyXuikUpr~wHg6GtlfNa2Z~re-t0n8xoCN84qgcynXbqxKIfaRUZ3VniruYpOS8nm5C7Dh-kDYBUuNXAylRBF-MStLC115Mu0qIuFtU~kAqVGZa8xwRqpXro3inaq08SO7el8Q__"
                  alt="travwling video"
                  width={"100%"}
                  height={"100%"}
                  sx={{ width: "678px", height: "488px", textAlign: "end" }}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
        {/* exploring things end from here*/}

        {/* accordion staart from here */}
        <div className="bg-blue-300 w-full p-3 rounded-lg sm:h-full mt-10">
          <h2 className=" xs:text-2xl sm:text-4xl font-bold text-center mb-4 ml-8 md:text-5xl  ">
            Frequently Asked Questions
          </h2>
          <AccordionUsage />
        </div>
        {/* accordion end from here */}
      </div>
    </>
  );
};

export default Home;
