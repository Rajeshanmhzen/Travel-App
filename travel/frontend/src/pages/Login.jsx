import {
  Apple,
  FacebookOutlined,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MyCarousel from "../components/Carousel";
import { Link } from "react-router";

const Login = () => {
  const [eye, setEye] = useState(false);

  return (
    <>
      <Grid2
        container
        margin={"auto"}
        bgcolor={"white"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ p: { xs: 3, sm: 5, md: 8 } }}
      >
        <Grid2 size={{ xs: 12, md: 5 }} p={1}>
          <img src="./logo/logo.png" alt="" className="" />

          <Box width={"512px"} gap={"16px"} py={5}>
            <Typography variant="h3" color="black">
              Login
            </Typography>
            <Typography variant="subtitle2" className="text-gray-500">
              Login to acess your golobe account.
            </Typography>
          </Box>

          <Box>
            <Grid2 item size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                placeholder="Enter Email"
                label="Email"
                variant="outlined"
                sx={{ mb: "24px" }}
              />
              <div className="relative">
              <TextField
                fullWidth
                placeholder="Enter Password"
                label="Password"
                variant="outlined"
                />
                <span className="absolute "><Visibility/></span>
                </div>
              <Typography
                variant="subtitle2"
                color="black"
                sx={{ textAlign: "right", mt: "16px" }}
              >
                Forget Password
              </Typography>
            </Grid2>
            <Button variant="outlined" fullWidth sx={{ marginTop: "5px" }}>
              Submit
            </Button>
            <Typography
              variant="subtitle2"
              color="black"
              sx={{ textAlign: "center", mt: "16px" }}
            >
              Don't have an account?{" "}
              <span className="text-red-400">Sign Up</span>
            </Typography>
          </Box>

          <Divider textAlign="center" sx={{ my: "16px" }}>
            Or login with
          </Divider>
          <Stack
            direction="row"
            spacing={2}
            justifyContent={"space-between"}
            mt={"24px"}
          >
            <Button
              variant="outlined"
              sx={{
                px: { sm: "24px", md: "48px" },
                py: { sm: "9px", md: "12px" },
                border: "1px solid #8dd3bb",
              }}
            >
              <FacebookOutlined />
            </Button>
            <Button
              variant="outlined"
              sx={{
                px: { sm: "24px", md: "48px" },
                py: { sm: "9px", md: "12px" },
                border: "1px solid #8dd3bb",
              }}
            >
              <Google />
            </Button>
            <Button
              variant="outlined"
              sx={{
                px: { sm: "24px", md: "48px" },
                py: { sm: "9px", md: "12px" },
                color: "black",
                border: "1px solid #8dd3bb",
              }}
            >
              <Apple />
            </Button>
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 5 }} p={5}>
          <MyCarousel />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Login;
