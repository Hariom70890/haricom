import React from "react";
import { Box, Image, Flex, Text, Input,Divider } from "@chakra-ui/react";
// import "../../Style/help.css";
import search from '../Image/search.png';
import peace from '../Image/peace.png'
const Help = () => {
  return (
    <div>
      <Box className='help_box' borderRadius={"20px"}>
        <Text className="help_text" textAlign={"center"}>
          Help 
        </Text>
       
        
        <Box padding={"12px"} margin={"auto"} width={"90%"} display={'flex'}>
          <Input className="input" style={{backgroundColor:"#fff"}} />
          <Image src={search} width={'30px'}/>
        </Box>
      </Box>
      <br/>
      <br/>
      <Box style={{padding:"12px 0px"}} className='comment_box'>
        <h2>18 collection</h2>
        <Divider/>
      </Box>
      <Box style={{padding:"17px 0px"}}  className='comment_box'>
        <h2 style={{fontSize:"20px",fontWeight:"600"}}>Interview Overiew</h2>
       
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/>
      </Box>
      <Box style={{padding:"17px 0px"}}  className='comment_box'>
        <h2 style={{fontSize:"20px",fontWeight:"600"}}>help Desk</h2>
       
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/>
      </Box>
      <Box style={{padding:"17px 0px"}}  className='comment_box'>
        <h2 style={{fontSize:"20px",fontWeight:"600"}}>Getting Started</h2>
       
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/>
      </Box>
      <Box style={{padding:"17px 0px"}}  className='comment_box'>
        <h2 style={{fontSize:"20px",fontWeight:"600"}}>AI chatbot</h2>
       
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/>
      </Box>
      <Box style={{padding:"12px 0px"}}  className='comment_box'>
        <h2 style={{fontSize:"20px",fontWeight:"600"}}>Productive Support</h2>
        <Divider/>
        <p className='p_help_tag'>See your coustomer service working</p>
        <Divider/><br /><br /><br /><br />
      </Box>
      
     
    </div>
  );
};

export default Help;