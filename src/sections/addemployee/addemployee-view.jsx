import React from "react";
import { useState } from "react";
import { getToken } from "../../utils/token-util";
import {
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// ----------------------------------------------------------------------

export default function AddEmployeeView() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [address, setAdress] = useState();
  const [dob, setDob] = useState();
  const [phone, setPhone] = useState();
  const [cnic, setCnic] = useState();
  const [nationality, setNationality] = useState();
  const [gender, setGender] = useState();

  const addEmployee = () => {
    const token = getToken();
    const body = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      dob: dob,
      phone: phone,
      cnic: cnic,
      nationality: nationality,
      password: password,
      gender: gender,
    });

    console.log(`---http://localhost:5000/api/v1/admin/createEmployee---`);
    fetch(`http://localhost:5000/api/v1/admin/createEmployee`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      method: "POST",
      body: body,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log(body);
  };

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4">Add Employee</Typography>
        </Stack>

        <Stack direction="column" mb={5}>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">First Name</Typography>
              <TextField
                fullWidth
                required
                id="standard-basic"
                variant="standard"
                defaultValue=""
                onChange={(f) => setFirstName(f.target.value)}
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
                onChange={(l) => setLastName(l.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
                sx={{ my: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Phone</Typography>
              <TextField
                fullWidth
                required
                id="standard-basic"
                variant="standard"
                defaultValue=""
                onChange={(p) => setPhone(p.target.value)}
                sx={{ my: 2 }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Password</Typography>
              <TextField
                fullWidth
                required
                id="standard-basic"
                variant="standard"
                defaultValue=""
                onChange={(p) => setPassword(p.target.value)}
                sx={{ my: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Gender</Typography>
              <TextField
                fullWidth
                required
                id="standard-basic"
                variant="standard"
                defaultValue=""
                onChange={(g) => setGender(g.target.value)}
                sx={{ my: 2 }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Nationality</Typography>
              <TextField
                fullWidth
                required
                id="standard-basic"
                variant="standard"
                defaultValue=""
                onChange={(n) => setNationality(n.target.value)}
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
              <Typography variant="h6">Address</Typography>
              <TextField
                fullWidth
                required
                id="standard-basic"
                variant="standard"
                defaultValue=""
                onChange={(a) => setAdress(a.target.value)}
                sx={{ my: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">CNIC No.</Typography>
              <TextField
                fullWidth
                required
                id="standard-basic"
                variant="standard"
                defaultValue=""
                onChange={(cnic) => setCnic(cnic.target.value)}
                sx={{ my: 2 }}
              />
            </Grid>
            <Grid container spacing={2} sx={{ my: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Date of Birth</Typography>
                <Box sx={{ my: 2 }}>
                  <DatePicker
                    onChange={(d) => {
                      console.log(d);
                      setDob(d);
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
        <Button variant="contained" color="inherit" onClick={addEmployee}>
          Send Email
        </Button>
      </Container>
    </>
  );
}
