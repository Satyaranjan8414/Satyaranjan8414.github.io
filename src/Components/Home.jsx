import { Avatar, Badge, Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import profileImage from "../Images/MainPicture.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Flex
      id="home"
      mt={10}
      // border="1px solid red"
      direction={{ base: "column", md: "row" }}
      justify={"center"}
      gap={8}
      minH="100vh"
      pb={{ base: "10px", lg: "120px" }}
      // pb={["10px", "20px", "60px"]}
      // bg={"black"}
    >
      <Flex
        alignItems="center"
        
        direction={{ base: "column", md: "row", lg: "row" }}
        gap={{ base: 5, md: 5, lg: 2 }}
        padding="40px 60px"
        // border="1px solid red"
      >
        <Box
          // border="1px solid yellow"
          lineHeight={"60px"}
          w={"100%"}
          textAlign={{ base: "center", md: "center", lg: "start" }}
          p={"20px"}
        >
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
            fontWeight="bold"
            mb={2}
          >
            Hello there, I'm
          </Text>
          <Text
            textColor={"#845ef7"}
            fontSize={{ base: "4xl", md: "4xl", lg: "7xl" }}
            fontWeight="bold"
            mb={4}
            id="user-detail-name"
          >
            Satyaranjan Maity
          </Text>
          <Text fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}>
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Developer",
                  "A Software Engineer",
                  "A Problem Solver",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Box>
        <Image
          className="home-img"
          
          src={profileImage}
          objectFit={"contain"}
          // h={{ base: "5%", md: "60%", lg: "60%" }}
          w={{ base: "70%", md: "30%", lg: "25%"}}
          _hover={{
            transition: "0.9s",
            transform: "scale(1.1)",
            boxShadow:"rgb(121,80,242) 3px 2px 20px 1px" 
            // width: "150%",
          }}
          borderRadius="50px"
          bg={"gray"}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
