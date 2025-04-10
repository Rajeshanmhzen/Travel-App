import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const NewCard = ({imagePath, heading, title ,date, realTime, location}) => {
  return (
    <>
    <Card sx={{ maxWidth: 590 , maxHeight:860, margin:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className='h-[468px] w-full'
          image={imagePath}
          alt={heading}
        />
        <CardContent>
        <Box
       sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.875rem",
        color: "gray",
        mb: 1,
      }}
        >
            <Typography variant="body2" color="text.secondary">{location}</Typography>
            <Typography variant="body2" color="text.secondary">{date}. {realTime} min read</Typography>

        </Box>
          <Typography gutterBottom variant="h5" component="div">
          {heading}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className='align-end'>
          Read more
          <span>
           <MdOutlineArrowOutward />
          </span>
        </Button>
      </CardActions>
    </Card>
    </>
  )
}

export default NewCard