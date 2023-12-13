import React, { useState } from "react";
import { styled } from "@mui/system";
import Popover from "@mui/material/Popover";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Home from "./Home";
import News from "./News";
import Messages from "./Messages";
import Help from "./Help";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import NewsIcon from "@mui/icons-material/Announcement";
import HelpIcon from "@mui/icons-material/Help";

const ChatIconWrapper = styled("div")({
  position: "fixed",
  bottom: 16,
  right: 16,
  cursor: "pointer",
  zIndex: 1000, // Ensure the chat icon is above other elements
});


const PopupContent = styled("div")({
  width: "400px",
  padding: "16px",
  height: "100vh",
  border: "2px solid black",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
})


const TabsContainer = styled("div")({
  position: "fixed",
  bottom: 15,
  left: 850,
  // width: "100%",
  background: "blue",
  color: "white",
  padding: "0px 16px",
  borderRadius: "2rem",
});

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
          {/* Content for each tab */}
          <Typography component="div" role="tabpanel" hidden={selectedTab !== 0}>
            <Home />
          </Typography>
          <Typography component="div" role="tabpanel" hidden={selectedTab !== 1}>
            <Messages />
          </Typography>
          <Typography component="div" role="tabpanel" hidden={selectedTab !== 2}>
            <News />
          </Typography>
          <Typography component="div" role="tabpanel" hidden={selectedTab !== 3}>
            <Help />
          </Typography>

          {/* Tabs at the bottom */}
          <TabsContainer>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="white"
              variant="standard"
              scrollButtons="auto"
              style={{ minHeight: "48px" }}
            >
              <Tab icon={<HomeIcon />} label="Home" />
              <Tab icon={<ChatIcon />} label="Chat" />
              <Tab icon={<NewsIcon />} label="News" />
              <Tab icon={<HelpIcon />} label="Help" />
            </Tabs>
          </TabsContainer>
        </PopupContent>
      </Popover>
    </>
  );
};

export default ChatComponent;
