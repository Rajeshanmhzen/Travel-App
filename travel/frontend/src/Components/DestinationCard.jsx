import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import { FaHeart } from "react-icons/fa";

const DestinationCard = ({ imagePath, destination, properties }) => {
  return (
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
        image={imagePath}
        alt={destination}
        sx={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
      />
      
      {/* Favorite Icon */}
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <FaHeart className="text-white"/>
      </IconButton>

      {/* Card Content (Text) */}
      <CardContent sx={{ padding: "10px 16px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {destination}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {properties} properties
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
