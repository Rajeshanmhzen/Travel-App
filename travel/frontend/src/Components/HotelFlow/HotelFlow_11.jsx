import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router";
import { Box, Button, Container, Rating } from "@mui/material";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const HotelFlow11 = () => {
  const [value, setValue] = useState();
  return (
    <>
      <div className="mt-20">
        <Container maxwidth={"lg"}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="text-red-200"
            >
              USA
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              className="text-red-200"
            >
              New York
            </Link>
            <Typography sx={{ color: "text.primary" }}>
              CVK Park Hotel Hotel, New York
            </Typography>
          </Breadcrumbs>
          <Box>
            <div className="flex gap-3  align-middle">
              <Typography variant="h3">CVK Park Hotel, New York</Typography>
              <div className="flex gap-2 justify-center align-middle">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Typography component="legend">5 Star Hotel</Typography>
              </div>
            </div>
            <Typography variant="body2" color="color.secondary">
            <FaLocationDot />
            Ganny fx . No:8, New York 34437 
            </Typography>
            <div className="flex align-center text-center">
              <Button variant="outlined">
                4.2
              </Button>
              <Typography variant="body2">
                <strong>Very Good</strong> 371 reviews
              </Typography>
            </div>
          </Box>

        </Container>
      </div>
    </>
  );
};

export default HotelFlow11;
