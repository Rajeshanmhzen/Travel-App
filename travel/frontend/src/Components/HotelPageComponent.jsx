import React from 'react'
import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material'


const HotelPageComponent = ({img, title, available, amount, wifiIcon, tvIcon, showerIcon}) => {
  return (
    <>
        <Card sx={{Width:390, minHeight:414, margin:2}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className='w-[390px] h-[250px]'
                    image={img}
                />
                <Box sx={{
                    display:"flex",
                    justifyContent:'space-between',
                    alignItems:'center',
                    margin: "10px 0",
                    padding:"0 12px"
                }}>
                    <Typography variant='h5' color='text.primary' >{title}</Typography>
                    <Typography variant='p' color='text.secondary'>Available: {available}</Typography>
                </Box>
                <Typography className='px-3'>${amount}</Typography>
                <Box sx={{
                    display:'flex',
                    justifyContent:"space-between",
                    alignItems:'center',
                    padding:"0 12px",
                }}>
                    <Box sx={{
                        display:'flex',
                        gap:2,
                        margin:"20px 0px"
                    }}>
                        {
                            wifiIcon &&
                    <Typography variant='p' color='text.primary'  className='w-10 h-10 bg-slate-200 rounded-full py-3 px-3'> <p className='text-blue-600'>{wifiIcon}</p></Typography>
                        }
                        {
                            tvIcon &&
                    <Typography variant='p' color='text.primary'  className='w-10 h-10 bg-slate-200 rounded-full py-3 px-3'> <p className='text-blue-600'>{tvIcon}</p></Typography>
                        }
                        {
                            showerIcon &&
                    <Typography variant='p' color='text.primary'  className='w-10 h-10 bg-slate-200 rounded-full py-3 px-3'> <p className='text-blue-600'>{showerIcon}</p></Typography>
                        }
                    </Box>
                    <Button
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
            Book Now
          </Button>

                </Box>
            </CardActionArea>
        </Card>

    </>
  )
}

export default HotelPageComponent