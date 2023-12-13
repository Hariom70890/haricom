import React from "react";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import {
  AirOutlined,
  SendAndArchiveTwoTone,
  Search,
} from "@mui/icons-material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const Home = () => {
  return (  
    <Box
      borderRadius="25px"
      padding="20px"
      background="linear-gradient(90deg, rgba(31,19,232,1) 0%, rgba(6,6,255,0.5264325196715607) 30%, rgba(4,71,255,1) 52%, rgba(0,212,255,1) 100%)"
      color="white"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
    >
      <Flex gap="30px" justifyContent="center">
        <AirOutlined fontSize="large" />
        <AddToPhotosIcon fontSize="large" />
      </Flex>

      <Box marginTop="40px" textAlign="center">
        <Heading as="h2" size="lg" mb="4">
          Hello there.
        </Heading>
        <Text fontSize="lg">How can we help?</Text>
      </Box>

      <Box
        bgColor="white"
        color="black"
        p="20px"
        borderRadius="25px"
        marginTop="20px"
        textAlign="center"
      >
        <Flex gap="20px" justifyContent="center" alignItems="center">
          <Box>
            <Heading as="h3" size="md">
              Send us a message
            </Heading>
          </Box>
          <Box>
            <SendAndArchiveTwoTone fontSize="large" />
          </Box>
        </Flex>
        <Text mt="3">We typically reply within a day</Text>
      </Box>
      <Box margin="20px 0px" background="white" color="black">
        <img
          src="https://downloads.intercomcdn.com/i/o/798705491/802ac1eb4c72711c6a270831/Join%20the%20New%20Intercom%20Community.png?resize=350x"
          alt=""
        />
        <Text>
          <h3>The HeriCom Community</h3>
          <p>
            Be sure to check out the hariocom Community for support, plus tips
            & tricks from HariCom users and much more
          </p>
        </Text>
      </Box>

      <Box
        bgcolor="white"
        color="black"
        p="5px"
        borderRadius="25px"
        marginTop="20px"
      >
        <Flex gap="150px" background="#BDBDBD" padding="2px 10px" borderRadius="20px">
          <h3>Search for help</h3>
          <Search style={{ marginTop: "20px" }} />
        </Flex>
        <Text>Send custom user attributes to Intercom </Text>
        <Text>Tracking user data in Intercom</Text>
        <Text>Customize the pre-made email templates</Text>
        <Text>Forward your email to your team inbox</Text>
      </Box>

      <Box margin="20px 0px" background="white" color="black">
        <img
          src="https://images.ctfassets.net/xny2w179f4ki/Y779AgRt5sjg2nE9NnWx7/2684a93c01ce95d546deedcc64a0e90d/HBR_Resource_LP_Thumbnail_-_393x250.png"
          alt=""
        />
        <Text>
          <h3>Future‑Proofing Businesses with Modern Customer Engagement</h3>
          <p>
            See how businesses are building unified, efficient customer
            engagement strategies that protect their bottom line.
          </p>
        </Text>
      </Box>
      <br /><br /><br /><br />
    </Box>
  );
};

export default Home;
