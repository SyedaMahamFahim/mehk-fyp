import React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { getToken } from "../../utils/token-util";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RegisterView() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [address, setAdress] = useState();
  const [dob, setDob] = useState();
  const [phone, setPhone] = useState();
  const [cnic, setCnic] = useState();
  const [nationality, setNationality] = useState();

  const register = () => {
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
    });
    if (
      body.firstName ||
      body.lastName ||
      body.email ||
      body.address ||
      body.dob ||
      body.phone ||
      body.cnic ||
      body.nationality
    ) {
      console.log(
        `---http://localhost:5000/api/v1/employee/person/register---`
      );
      fetch(`http://localhost:5000/api/v1/employee/person/register`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        method: "POST",
        body: body,
      })
        .then((response) => response.json())
        .then((user) => console.log(user));
      console.log(body);
    } else {
      alert("Please fill required fields");
    }
  };

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Registration
        </Typography>
      </Stack>
      <Card>
        <Grid container spacing={2} sx={{ backgroundColor: "#F3F1F1" }}>
          <Grid item xs={12} sm={6}>
            {/* Left Side - Image */}
            <div
              style={{
                backgroundImage: 'url("/assets/register.png")',
                backgroundSize: "cover",
                height: "100%",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ my: 4, px: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ m: 2 }}>
                  <Typography variant="h6" sx={{ m: 1 }}>
                    First Name
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required-1"
                    defaultValue=""
                    onChange={(f) => setFirstName(f.target.value)}
                    sx={{ my: 1 }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ m: 2 }}>
                  <Typography variant="h6" sx={{ m: 1 }}>
                    Last Name
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required-1"
                    defaultValue=""
                    onChange={(l) => setLastName(l.target.value)}
                    sx={{ my: 1 }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ m: 2 }}>
                  <Typography variant="h6" sx={{ m: 1 }}>
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-required-1"
                    defaultValue=""
                    sx={{ my: 1 }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ m: 2 }}>
                  <Typography variant="h6" sx={{ m: 1 }}>
                    Address
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required-1"
                    defaultValue=""
                    onChange={(a) => setAdress(a.target.value)}
                    sx={{ my: 1 }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ m: 2 }}>
                  <Typography variant="h6" sx={{ m: 1 }}>
                    Date of Birth
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required-1"
                    defaultValue=""
                    onChange={(d) => setDob(d.target.value)}
                    sx={{ my: 1 }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ m: 2 }}>
                  <Typography variant="h6" sx={{ m: 1 }}>
                    Phone Number
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required-1"
                    defaultValue=""
                    onChange={(p) => setPhone(p.target.value)}
                    sx={{ my: 1 }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ m: 2 }}>
                  <Typography variant="h6" sx={{ m: 1 }}>
                    CNIC Number
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required-1"
                    defaultValue=""
                    onChange={(cnic) => setCnic(cnic.target.value)}
                    sx={{ my: 1 }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ m: 2 }}>
                  <Typography variant="h6" sx={{ m: 1 }}>
                    Nationality
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    id="outlined-required-1"
                    defaultValue=""
                    onChange={(n) => setNationality(n.target.value)}
                    sx={{ my: 1 }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ my: 1, mx: 1 }}>
              <Checkbox {...label} defaultChecked />
              <Typography variant="h6" sx={{ m: 1 }}>
                I agree to the terms and conditions
              </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ my: 1, mx: 2 }}>
              <Button
                variant="contained"
                color="inherit"
                onClick={register}
                sx={{ mt: 5 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
export default RegisterView;
