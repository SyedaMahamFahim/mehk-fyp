import React from 'react';
import { Box, Container, Typography, Button, Stack, Grid, Card } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <Container style={{ height: '80vh' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Registration</Typography>
            </Stack>
            <Grid container spacing={2} direction={'row'}>
                {/* Eye Scanner Card */}
                <Grid item xs={12} md={6} p={3}>


                    <Card sx={{ p: 2, textAlign: 'center', height: '450px' }}>
                        <Box sx={{ my: 2 }}>
                            <PhotoCamera
                                style={{
                                    fontSize: '8rem'
                                }}
                            />
                        </Box>
                        <Typography variant="h2" sx={{ mb: 2, p: 3 }}>Iris Scanner</Typography>
                        <Typography variant="h6">Open Camera for scanning your Eyes</Typography>
                    </Card>

                </Grid>

                {/* Upload Image Card */}
                <Grid item xs={12} md={6}>

                    <Box sx={{ mb: 2, p: 3 }}>
                        <Typography variant="h2" >Steps to follow:</Typography>

                    </Box>
                    <ul>
                        <li style={{ paddingBottom: '10px' }}>
                            <Typography variant="p" fontSize={20}>If you have not registered, then register your account first.</Typography>
                        </li>
                        <li style={{ paddingBottom: '10px' }}>
                            <Typography variant="p" fontSize={20}>Already registered, then start verification process. </Typography>
                        </li>
                    </ul>
                    <Stack direction="row" sx={{ mb: 2, p: 3 }}>

                        <Link to="/register/registration-form">
                            <Button variant="contained" color="inherit" sx={{ width: { xs: '100%', sm: '150px' }, borderRadius: '200px' }}>
                                Register
                            </Button>
                        </Link>
                    </Stack>

                </Grid>
            </Grid>
        </Container>
    );
};

export default RegisterForm;
