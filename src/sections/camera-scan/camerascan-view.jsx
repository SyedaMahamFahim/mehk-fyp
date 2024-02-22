import React from 'react';
import { Box, Container, Stack, Typography, Grid, Card } from '@mui/material';
import { PhotoCamera, CloudUpload } from '@mui/icons-material';
import { Link } from "react-router-dom";

const CameraScan = () => {
    return (
        <Container style={{ height: '80vh' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    <span><Link to="/verification">Verification / </Link></span>Scan
                </Typography>
            </Stack>
            <Grid container spacing={2} direction={'row'} justifyContent="center" alignContent={'center'}>
                {/* Eye Scanner Card */}
                <Grid item xs={12} md={6} p={3}>


                    <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                        <Box sx={{ my: 2 }}>
                            <PhotoCamera
                                style={{
                                    fontSize: '5rem'
                                }}
                            />
                        </Box>
                        <Typography variant="h2" sx={{ mb: 2, p: 3 }}>Iris Scanner</Typography>
                        <Typography variant="h6">Open Camera for scanning your Eyes</Typography>
                    </Card>

                </Grid>

                {/* Upload Image Card */}
                <Grid item xs={12} md={6} p={3}>
                    <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                        <Box sx={{ my: 2 }}>
                            <CloudUpload
                                style={{
                                    fontSize: '5rem'
                                }}
                            />
                        </Box>

                        <Typography variant="h2" sx={{ mb: 2, p: 3 }}>Upload Image</Typography>
                        <Typography variant="h6">Upload your clear </Typography>
                        <Typography variant="h6" sx={{ mb: 2 }}>image for eye detection</Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CameraScan;
