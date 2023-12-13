import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AirIcon from "@mui/icons-material/Air";
import { Button, Stack } from "@mui/material";
import Demo from "./Demo";

const Navbar = () => {
  const buttonStyle = {
    fontSize: "15px",
    fontWeight: "700",
    width:"200px",
    lineHeight: "127%",
    border:"2px solid white",
    backgroundColor: "#004ad9",
    color: "white",
    position: "relative",
    alignItems: "center",
    borderRadius: "20px",
  };

  const demoButtonStyle = {
    height: "3rem",
    padding: "0 1.5rem",
    borderRadius: "2rem",
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "inset 0 0 0 2px #fff",
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <AirIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HariCom
        </Typography>

        <Stack
          flex={{ base: 1, md: 0 }}
          // justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button style={buttonStyle}>Start free trial</Button>
          <Button style={demoButtonStyle}>
            <Demo />
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
