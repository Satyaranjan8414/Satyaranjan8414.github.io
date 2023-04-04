import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import SatyaRanjan from "../Resume/fw19_0538_Satyaranjan_Maity_Resume.pdf";

function About() {
  return (
    <Grid
      // border="1px solid red"
      textAlign="center"
      justifyContent={"center"}
      alignItems="center"
      py={12}
      minH="100vh"
      id="about"
      className="about section"
    >
      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        mb={"40px"}
        textAlign={"center"}
      >
        <Text
          as={"span"}
          position={"relative"}
          // _after={{
          //   content: "''",
          //   width: "full",
          //   height: useBreakpointValue({ base: "20%", md: "30%" }),
          //   position: "absolute",
          //   bottom: 1,
          //   left: 0,
          //   bg: "red.600",
          //   zIndex: -1,
          // }}
          boxShadow="rgb(121,80,242) 3px 2px 20px 1px" 
          padding={{md:"5px 100px",base:"5px 40px"}}
          borderTopEndRadius="150px"
                    borderBottomLeftRadius="150px"
          borderBottom="2px solid #845ef7"
        >
          About Me
        </Text>
      </Heading>
      <Flex direction={{ base: "column", md: "column", lg: "row" }} px={20}>
        <Box marginBottom={{ base: "30px" }}>
          <Image
            margin={"auto"}
            width={{ base: "100%", md: "60%", lg: "60%" }}
            height={{ base: "200px", md: "auto" }}
            borderRadius={{ base: "10%", md: "10%" }}
            objectFit="contain"
            src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
            alt="#"
          />
        </Box>
        <Box textAlign={"start"}>
          {/* <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          textAlign={"center"}
          mb={10}
        >
          Hi, I'm Somesh Rawat. I am a Full Stack Web Developer. I have
          been working as a Full Stack Web Developer since 2020. I have
          worked with many different technologies and I have also worked with
          many different languages.
        </Text> */}

          <Text fontSize="xl" mx="auto" p={4}>
          Hello! My name is Satyaranjan and I like to build websites/application that serves the world and always want to enhance my knowledge & adpot new technologies that make impact on people.
          </Text>
          <Text
            fontSize="xl"
            maxW="3xl"
            mx="auto"
            mt={6}
            mb={30}
            id="user-detail-intro"
            p={4}
          >
          My interest in web development started when I joined Masai School to learn full stack Web-Development — taught me alot about HTML & CSS.
          Fast Forwarding to today, I built a number of web applications and major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an opportunity as a full stack web developer.
          </Text>
          <Flex
            justify={"center"}
            alignItems="center"
            gap={10}
            direction={["column", "row", "row"]}
          >
            <Flex>
              <Button id="resume-button-2" bg={"#845ef7"} gap={4} px={10}>
                <Link
                  id="resume-link-2"
                  display={"flex"}
                  // justifyContent="space-between"
                  gap="15px"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1yGykHjW0GSKnywow-dtKht3xt00m4pGJ/view"
                    )
                  }
                  href={SatyaRanjan}
                  target={"_blank"}
                  download
                >
                  <FiDownload /> <span> Resume</span>
                </Link>
              </Button>
            </Flex>
            <Flex>
              <Button 
              onClick={() =>
                window.open(
                  "https://github.com/Satyaranjan8414"
                )
              }
              gap={4} px={10}>
                {" "}
                <BsGithub /> <span>Github</span>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Grid>
  );
}

export default About;
