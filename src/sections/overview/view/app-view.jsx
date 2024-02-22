import { Container, Stack, Typography,  Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function AppView() {
  return (
    <Container maxWidth="xl" style={{ height: '80vh' }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Home
      </Typography>

      <Grid container spacing={3} sx={{ mt: 5, px: 3 }}>
        <Grid item xs={12} md={6} lg={8}>
          <Typography variant="h1" sx={{ mb: 1 }}>
            BIOMETRIC SYSTEM
          </Typography>
          <Typography variant="h3" sx={{ mb: 5 }}>
            THROUGH IRIS DETECTION
          </Typography>
          <Typography variant="h6" sx={{ mb: 5 }}>
            Choose the Process!
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mx: 0.2 }}>
            <Link to="/register">
              <Button variant="contained" color="inherit" sx={{ width: { xs: '100%', sm: '150px' }, borderRadius: '200px' }}>
                Register
              </Button>
            </Link>
            <Link to="/verification">
              <Button variant="contained" color="inherit" sx={{ width: { xs: '100%', sm: '150px' }, borderRadius: '200px' }}>
                Verify
              </Button>
            </Link>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
            <ul>
              <li>
                If you have not registered, then register your account first.
              </li>
              <li>Already registered, then start the verification process. </li>
            </ul>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <img src="/assets/images/hero-section.png" alt="login" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Container>
  );
}
