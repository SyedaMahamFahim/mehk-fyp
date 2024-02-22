import React from 'react';

import { Container, Stack, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// ----------------------------------------------------------------------

export default function AddUserPage() {


    return (
        <>
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4">Add User</Typography>
                </Stack>

                <Stack direction="column" mb={5}>
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid item xs={12} sm={6} >
                            <Typography variant="h6">First Name</Typography>
                            <TextField
                                fullWidth
                                required
                                id="standard-basic"
                                variant="standard"
                                defaultValue=""
                                sx={{ my: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Last Name</Typography>
                            <TextField
                                fullWidth
                                required
                                id="standard-basic"
                                variant="standard"
                                defaultValue=""
                                sx={{ my: 2 }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Email</Typography>
                            <TextField
                                fullWidth
                                required
                                id="standard-basic"
                                variant="standard"
                                defaultValue=""
                                sx={{ my: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Contact</Typography>
                            <TextField
                                fullWidth
                                required
                                id="standard-basic"
                                variant="standard"
                                defaultValue=""
                                sx={{ my: 2 }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Create Password</Typography>
                            <TextField
                                fullWidth
                                required
                                id="standard-basic"
                                variant="standard"
                                defaultValue=""
                                sx={{ my: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Confirm Password</Typography>
                            <TextField
                                fullWidth
                                required
                                id="standard-basic"
                                variant="standard"
                                defaultValue=""
                                sx={{ my: 2 }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Nationality

                            </Typography>
                            <TextField
                                fullWidth
                                required
                                id="standard-basic"
                                variant="standard"
                                defaultValue=""
                                sx={{ my: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Religion</Typography>
                            <TextField
                                fullWidth
                                required
                                id="standard-basic"
                                variant="standard"
                                defaultValue=""
                                sx={{ my: 2 }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Date of Birth
                            </Typography>
                            <Box sx={{ my: 2 }}>
                                <DatePicker />
                            </Box>


                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">CNIC No.
                            </Typography>
                            <TextField
                                fullWidth
                                required
                                id="standard-basic"
                                variant="standard"
                                defaultValue=""
                                sx={{ my: 2 }}
                            />
                        </Grid>
                    </Grid>


                </Stack>
                <Button variant="contained" color="inherit">
                    Send Email
                </Button>
            </Container>
        </>

    );
}

