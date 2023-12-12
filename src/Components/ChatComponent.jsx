// ChatComponent.js
import React, { useState } from "react";
import { styled } from "@mui/system";
import ChatIcon from "@mui/icons-material/Chat";
import Popover from "@mui/material/Popover";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Home from "./Home";
import News from "./News";
import Messages from "./Messages";

// Styled components
const ChatIconWrapper = styled("div")({
  position: "fixed",
  bottom: 16,
  right: 16,
  color: "yellow",
  cursor: "pointer",
});

const PopupContent = styled("div")({
  width: "400px",
  padding: 16,
  border: "2px solid black",
  borderRadius: "20px",
  boxShadow: "your-box-shadow-styles-here",
});

// ChatComponent
const ChatComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChatIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      {/* Chat Icon */}
      <ChatIconWrapper onClick={handleChatIconClick}>
        <ChatIcon />
      </ChatIconWrapper>

      {/* Chat Popup */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <PopupContent>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="standard" // Set variant to standard to fix tabs
            scrollButtons="auto" // Set scrollButtons to auto if needed
            style={{ minHeight: "48px" }} 
          >
            <Tab label="Home" />
            <Tab label="Chat" />
            <Tab label="News" />
            <Tab label="Help" />
          </Tabs>
          <Typography component="div" role="tabpanel" hidden={selectedTab !== 0}>
            {/* Content for Home tab */}
            <Home />
          </Typography>
          <Typography component="div" role="tabpanel" hidden={selectedTab !== 1}>
            {/* Content for Chat tab */}
            <Messages />
          </Typography>
          <Typography component="div" role="tabpanel" hidden={selectedTab !== 2}>
            {/* Content for News tab */}
            <News />
          </Typography>
          <Typography component="div" role="tabpanel" hidden={selectedTab !== 3}>
            {/* Content for Help tab */}
            Help Content
          </Typography>
        </PopupContent>
      </Popover>
    </>
  );
};

export default ChatComponent;
