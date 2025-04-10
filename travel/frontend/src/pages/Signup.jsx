import { Apple, FacebookOutlined, Google, } from '@mui/icons-material'
import { Box, Button, Checkbox, Divider, Grid2, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import MyCarousel from '../components/Carousel'
import { Link } from 'react-router'

const Signup = () => {
    const [eye, setEye] = useState(false)

    return (
        <>
            <Grid2 container margin={'auto'} bgcolor={'white'} alignItems={'start'} justifyContent={'center'}  sx={{ p: { xs: 3, sm: 5, md: 8 } }}>
                <Grid2 size={{ xs: 12, md: 7 }} p={1}>
                    <img src="./logo/logo.png" alt="" className='' />
                    <Box gap={'16px'} py={3} >
                        <Typography variant='h3'>Signup</Typography>
                        <Typography variant='subtitle2' >Let’s get you all st up so you can access your personal account.</Typography>
                    </Box>

                    <Box>
                        <Grid2 container rowSpacing={3} columnSpacing={3}>

                            <TextField placeholder="Enter First Name" label="First Name" variant="outlined" sx={{ width: { xs: '100%', sm: '350px', md: '310px' } }} />
                            <TextField placeholder="Enter Last Name" label="Last Name" variant="outlined" sx={{ width: { xs: '100%', sm: '350px', md: '310px' } }} />

                            <TextField placeholder="Enter Email" label="Email" variant="outlined" sx={{ width: { xs: '100%', sm: '350px', md: '310px' } }} />
                            <TextField placeholder="Enter Phone Number" label="Phone Number" variant="outlined" sx={{ width: { xs: '100%', sm: '350px', md: '310px' } }} />

                            <TextField placeholder="Enter Password" fullWidth label="Password" variant="outlined" />
                            <TextField placeholder="" fullWidth label="Confirm Password" variant="outlined" />



                        </Grid2>

                        <Typography variant='subtitle2' sx={{ textAlign: 'start', mt: 3, mb: 3 }} display={'flex'} alignItems={'center'}>
                                            <Checkbox required/>
                            I agree to all the  <Link className='text-[#ff8682] mx-1' >Terms</Link> and <Link className='text-[#ff8682] mx-1'> Privacy Policies </Link> 
                            
                        </Typography>

                        <Button variant='outlined' size='large' fullWidth sx={{ background: '#66abc7', color: 'black', fontWeight:'bold' }} >Create an Account</Button>
                                 <Typography variant='subtitle2'  sx={{ textAlign: 'center', my:1 }}>
                                 Already have an account? Login
                                     <Link className='text-[#ff8682]'> Sign Up </Link> </Typography>
                    
                    </Box>
                    <Divider textAlign='center' sx={{ my: '16px' }}>
                        Or Sign up with
                    </Divider>
                    <Stack direction="row" spacing={2} justifyContent={'space-between'} mt={'24px'} >

                        <Button variant="outlined" sx={{ px: { sm: '24px', md: '48px' }, py: { sm: '9px', md: '12px' }, border: "1px solid #8dd3bb" }} >
                            <FacebookOutlined />
                        </Button>
                        <Button variant="outlined" sx={{ px: { sm: '24px', md: '48px' }, py: { sm: '9px', md: '12px' }, border: "1px solid #8dd3bb" }}>
                            <Google />
                        </Button>
                        <Button variant="outlined" sx={{ px: { sm: '24px', md: '48px' }, py: { sm: '9px', md: '12px' }, color: 'black', border: "1px solid #8dd3bb" }}>
                            <Apple />
                        </Button>
                    </Stack>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 5 }} p={5}>
                    <MyCarousel />

                </Grid2>


            </Grid2>
        </>
    )
}

export default Signup