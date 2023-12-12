import React, { useState } from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import MessageIcon from "@mui/icons-material/Message";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "75vh",
});

const TopStrip = styled("div")({
  borderRadius: "25px",
  backgroundColor: "#2196f3", // Blue color
  color: "#fff", // White text color
  height: "50px", // Adjust the height of the blue strip
  width: "100%",
});

const IconWrapper = styled("div")({
  fontSize: "5em", // Increased the icon size
  marginBottom: "16px",
  color: "#2196f3", // Blue color
});

const StyledButton = styled(Button)({
  marginTop: "16px", // Added margin to the top of the button

  "&:hover": {
    backgroundColor: "#1565c0", // Lighter blue on hover
  },
});

const MessagePage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleStartMessages = () => {
    // Implement logic to navigate to the messaging page or perform other actions
    console.log("Start Messages clicked!");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <TopStrip />
      <Container>
        <IconWrapper>
          <MessageIcon />
        </IconWrapper>
        <Typography variant="h6" gutterBottom>
          No messages yet.
        </Typography>
        <StyledButton variant="contained" onClick={handleStartMessages}>
          Start Messages
        </StyledButton>

        {/* Snackbar for interesting alerts */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000} // Adjust the duration as needed
          onClose={handleCloseSnackbar}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity="success"
          >
            Messages started! 🚀
          </MuiAlert>
        </Snackbar>
      </Container>
    </>
  );
};

export default MessagePage;
