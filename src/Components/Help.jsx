import React from 'react';
import { styled } from "@mui/system";
import { HelpOutline } from "@mui/icons-material";

const HelpContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const HelpCard = styled("div")({
  width: "80%",
  maxWidth: "400px",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  background: "#fff",
  textAlign: "center",
});

const IconContainer = styled("div")({
  fontSize: "48px",
  color: "#4CAF50",
  marginBottom: "20px",
});

const Help = () => {
  return (
    <HelpContainer>
      <HelpCard>
        <IconContainer>
          <HelpOutline />
        </IconContainer>
        <h1>Page is under construction</h1>
        {/* You can add more content or styling as needed */}
      </HelpCard>
    </HelpContainer>
  );
}

export default Help;
