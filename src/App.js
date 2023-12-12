import logo from "./logo.svg";
import "./App.css";
import { Image } from "@chakra-ui/react";
import Demo from "./Components/Demo";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import heading from "./Image/heading.png";

import ChatComponent from "./Components/ChatComponent";

function App() {
   return (
      <>
         <Image src={heading} alt="heading" width={"100%"} />

         <Navbar />
         <MainPage />
         <ChatComponent />
      </>
   );
}

export default App;
