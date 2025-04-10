import { Box, Button, Card, CardMedia, Typography } from "@mui/material";

const TravelCard = ({ type, imagePath, destination, subtitle, price }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 2,
        position: "relative",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <CardMedia
        component="img"
        height={type === "flight" ? "280" : "400"} // Larger height for trip cards
        image={imagePath}
        alt={`${destination} image`}
        sx={{ filter: "brightness(0.8)" }}
      />

      {/* Text overlay based on type */}
      <Box
        sx={{
          position: "absolute",
          bottom: type === "flight" ? 50 : 20,
          left: 0,
          width: "100%",
          p: 2,
          display: "flex",
          justifyContent: type === "flight" ? "space-between" : "center",
          alignItems: "flex-end",
        }}
      >
        <Box textAlign={type === "flight" ? "left" : "center"}>
          <Typography variant="h6" component="div" color="white" fontWeight="bold">
            {destination}
          </Typography>
          {type === "flight" ? (
            <Typography variant="body2" color="white" sx={{ opacity: 0.9 }}>
              {subtitle}
            </Typography>
          ) : null}
        </Box>
        {type === "flight" && (
          <Typography variant="h5" color="white" fontWeight="bold">
            $ {price}
          </Typography>
        )}
      </Box>

      {/* Button only for flight bookings */}
      {type === "flight" && (
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 0,
            width: "100%",
            px: 2,
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              color: "black",
              bgcolor: "#4FC3F7",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#29B6F6",
              },
            }}
          >
            Book Flight
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default TravelCard;
