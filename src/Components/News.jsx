// News.js
import React from "react";
import { styled } from "@mui/system";
import { Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});

const NewsCard = styled(Card)({
  maxWidth: 600,
  margin: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const NewsImage = styled(CardMedia)({
  height: 200,
});

const NewsContent = styled(CardContent)({
  textAlign: "left",
});

const ReadMoreButton = styled(Button)({
  marginTop: "10px",
});

const News = () => {
  const newsData = [
    
        {src:"https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    tit:"Support customers with Fin in 45 languages—join the open beta👇",des:"Support your customers with Fin in 45 languages—with no extra setup required. In addition to English, Fin now supports conversations in Arabic, Bengali, Bosnian, Brazilian Portuguese, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Estonian, Finnish, French, German, German (Formal), Greek, Hebrew, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Latviski, Lithuanian, Malay, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Simplified Chinese, Slovenian, Spanish, Swahili, Swedish, Thai, Traditional Chinese, Turkish, Ukrainian, Vietnamese, and Англи хэл (Mongolian)."},
    {src:"https://downloads.intercomcdn.com/i/o/850964865/8d1717b98563f4697ea8945a/Cover.png",tit:"Streamline external collaboration with side conversations",des:"Start a conversation with external partners from within the context of a conversation or ticket."},
    {src:"https://downloads.intercomcdn.com/i/o/861417391/6794b48e891b5e19cdc713ba/Screenshot+2023-10-25+at+09.22.37.png",tit:"Give your customers a centralized view of their tickets with the tickets portal",des:"When using Intercom tickets in a b2b support use case, the tickets portal enables an external view of all tickets grouped by company."},
    {src:"https://downloads.intercomcdn.com/i/o/850163797/25179da748b8ed586e93d154/Cover.png",tit:"Set the right expectations by customising the Start Conversation button in the Messenger 💬",des:"Customize the Start Conversation button in your Messenger 🪄"},
    {src:"https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    tit:"Support customers with Fin in 45 languages—join the open beta👇",des:"Support your customers with Fin in 45 languages—with no extra setup required."},
    {src:"https://downloads.intercomcdn.com/i/o/850964865/8d1717b98563f4697ea8945a/Cover.png",tit:"Streamline external collaboration with side conversations",des:"Start a conversation with external partners from within the context of a conversation or ticket."},
    {src:"https://downloads.intercomcdn.com/i/o/861417391/6794b48e891b5e19cdc713ba/Screenshot+2023-10-25+at+09.22.37.png",tit:"Give your customers a centralized view of their tickets with the tickets portal",des:"When using Intercom tickets in a b2b support use case, the tickets portal enables an external view of all tickets grouped by company."},
    {src:"https://downloads.intercomcdn.com/i/o/850163797/25179da748b8ed586e93d154/Cover.png",tit:"Set the right expectations by customising the Start Conversation button in the Messenger 💬",des:"Customize the Start Conversation button in your Messenger 🪄"}
  ];

  return (
    <Container>
      {newsData.map((news, index) => (
        <NewsCard key={index}>
          <NewsImage component="img" alt="News Image" height="200" image={news.src} />
          <NewsContent>
            <Typography variant="h5" component="div">
              {news.tit}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.des}
            </Typography>
            <ReadMoreButton variant="outlined" color="primary">
              Read More
            </ReadMoreButton>
          </NewsContent>
        </NewsCard>
      ))}
    </Container>
  );
};

export default News;
