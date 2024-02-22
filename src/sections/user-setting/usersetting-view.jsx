import React from 'react';
import { Box, Container, Tabs, Tab, Typography, Stack, Grid, } from '@mui/material';
// import { Link } from "react-router-dom";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import SecurityIcon from '@mui/icons-material/Security';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}



const UserSetting = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Container style={{ height: '80vh' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>

                <Typography variant="h4" sx={{ textAlign: 'center' }}>UserSetting</Typography>
            </Stack>
            <Grid container spacing={2} direction={'row'}>
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label={<Typography><ManageAccountsIcon sx={{ verticalAlign: "middle" }} /> EditProfile</Typography>} {...a11yProps(0)} />

                        <Tab label={<Typography><ManageAccountsIcon sx={{ verticalAlign: "middle" }} /> EditProfile</Typography>} {...a11yProps(1)} />

                        <Tab label={<Typography><ManageAccountsIcon sx={{ verticalAlign: "middle" }} />Security</Typography>} {...a11yProps(2)} />

                        <Tab label={<Typography><ManageAccountsIcon sx={{ verticalAlign: "middle" }} />Password</Typography>} {...a11yProps(3)} />

                    </Tabs>
                    <TabPanel value={value} index={0}>
                        fg


                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item four
                    </TabPanel>

                </Box>
            </Grid>
        </Container>
    );
};

export default UserSetting;
