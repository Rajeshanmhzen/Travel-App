import React from "react";
import { Telegram } from "@mui/icons-material";
import Help_image from "../assets/help_img.png";
import { Button, Container, Typography, Grid, Box } from "@mui/material";

const Help = () => {
  return (
    <Box sx={{ height: "calc(100vh - 70px)", width: "100%", marginTop: "70px" }}>
      <Container sx={{ height: "100%", position: "relative" }}>
        
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontSize: { xs: "20px", sm: "28px" },
            mb: "8px",
          }}
        >
          Ask Any Question Any Time
        </Typography>

        {/* Image Container with Overlay */}
        <Box sx={{ width: "100%", height: "94%", position: "relative" }}>
          
          {/* Background Image */}
          <img
            src={Help_image}
            alt="Help image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              display: "block",
            }}
          />

          {/* Content Overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
                borderRadius: '10px',
                boxShadow: '0px 2px 16px rgba(255, 255, 255, 0.6)', // White drop shadow effect
              color: "white",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              {/* Left Content */}
              <Grid item xs={12} sm={6}>
                <Typography variant="button" fontWeight="bold" 
                sx={{
                    backgroundColor:"white",
                    padding:"10px 20px",
                    color:"black",
                    borderRadius:"8px"
                }}>
                  ASK ME ANYTHING
                </Typography>
                <Typography variant="h2" fontWeight="bold" 
                sx={{
                  margin:"15px 0",
                  fontSize: { xs: "48px",  sm: "58px", md:"70px" }

                  }}>
                  I'm OLIVIA
                </Typography>
                <Typography variant="body2">
                  Your personal AI travel assistant
                </Typography>
              </Grid>

              {/* Right Content */}
              <Grid item xs={12} sm={6} sx={{ textAlign: { xs: "center", sm: "right" } }}>
                <Button sx={{ color: "white", fontSize: { xs: "12px", sm: "16px" } }}>
                  Start chat now
                </Button>
                <Telegram
                  sx={{
                    fontSize: { xs: "30px", sm: "40px" },
                    color: "white",
                    backgroundColor: "blue",
                    borderRadius: "50%",
                    padding: "10px",
                    marginLeft: "10px",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Help;
