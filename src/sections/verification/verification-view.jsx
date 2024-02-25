import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Verification = () => {
  const webcamRef = useRef(null);
  const [message, setMessage] = useState("");
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setMessage("Image captured!");
    }, [webcamRef]);
  };

  return (
    <Container style={{ height: "80vh" }}>
      {message && <p>{message}</p>}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Verification
        </Typography>
      </Stack>
      {isClick ? (
        <div
          style={{
            width: "100%",
          }}
        >
          <Webcam ref={webcamRef} />{" "}
          <Stack direction="row" sx={{ mb: 2, p: 3 }}>
            
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  width: { xs: "100%", sm: "150px" },
                  borderRadius: "200px",
                }}
              >
                Verify
              </Button>
            
          </Stack>
        </div>
      ) : (
        <Grid container spacing={2} direction={"row"}>
          {/* Eye Scanner Card */}
          <Grid item xs={12} md={6} p={3}>
            <Card sx={{ p: 2, textAlign: "center", height: "450px" }}>
              <Box sx={{ my: 2 }}>
                <PhotoCamera
                  onClick={handleClick}
                  style={{
                    fontSize: "8rem",
                  }}
                />
              </Box>
              <Typography variant="h2" sx={{ mb: 2, p: 3 }}>
                Iris Scanner
              </Typography>
              <Typography variant="h6">
                Open Camera for scanning your Eyes
              </Typography>
            </Card>
          </Grid>

          {/* Upload Image Card */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2, p: 3 }}>
              <Typography variant="h2">Steps to follow:</Typography>
            </Box>
            <ul>
              <li style={{ paddingBottom: "10px" }}>
                <Typography variant="p" fontSize={20}>
                  If you have not registered, then register your account first.
                </Typography>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <Typography variant="p" fontSize={20}>
                  Already registered, then start verification process.{" "}
                </Typography>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <Typography variant="p" fontSize={20}>
                  If you have not registered, then register your account first.
                </Typography>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <Typography variant="p" fontSize={20}>
                  Already registered, then start verification process.{" "}
                </Typography>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <Typography variant="p" fontSize={20}>
                  If you have not registered, then register your account first.
                </Typography>
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <Typography variant="p" fontSize={20}>
                  Already registered, then start verification process.{" "}
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Verification;
