import React from 'react';
import { Box, Container, Stack, Typography, TextField, Button, Grid, Card } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const RegistrationForm = () => {
    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Registration                
            </Typography>
            </Stack>
            <Card >
                <Grid container spacing={2} sx={{backgroundColor : '#F3F1F1'}} >
                    <Grid item xs={12} sm={6}>
                        {/* Left Side - Image */}
                        <div style={{ backgroundImage: 'url("/assets/register.png")', backgroundSize: 'cover', height: '100%' }} />
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{ my: 4, px: 3 }} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} >
                                <Box sx={{ m: 2 }}>
                                    <Typography variant="h6" sx={{ m: 1 }}>First Name</Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required-1"                                      
                                        defaultValue=""
                                        sx={{ my: 1 }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Box sx={{ m: 2 }}>
                                    <Typography variant="h6" sx={{ m: 1 }}>Last Name</Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required-1"
                                        
                                        defaultValue=""
                                        sx={{ my: 1 }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} >
                                <Box sx={{ m: 2 }}>
                                    <Typography variant="h6" sx={{ m: 1 }}>Email</Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required-1"
                                        
                                        defaultValue=""
                                        sx={{ my: 1 }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Box sx={{ m: 2 }}>
                                    <Typography variant="h6" sx={{ m: 1 }}>Address</Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required-1"
                                       
                                        defaultValue=""
                                        sx={{ my: 1 }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} >
                                <Box sx={{ m: 2 }}>
                                    <Typography variant="h6" sx={{ m: 1 }}>Create Password</Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required-1"
                                        
                                        defaultValue=""
                                        sx={{ my: 1 }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Box sx={{ m: 2 }}>
                                    <Typography variant="h6" sx={{ m: 1 }}>Confirm Password</Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-required-1"
                                        
                                        defaultValue=""
                                        sx={{ my: 1 }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ my: 1, mx: 1 }}>

                            <Checkbox {...label} defaultChecked />
                            <Typography variant="h6" sx={{ m: 1 }}>I agree to the terms and conditions</Typography>
                        </Grid>
                        <Grid container spacing={2} sx={{ my: 1, mx: 2 }}>

                            <Button variant="contained" color="inherit" sx={{ mt: 5 }}>
                                Submit
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>

            </Card>
        </Container>
    );
};

export default RegistrationForm;
