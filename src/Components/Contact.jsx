import React from "react";
import {
  Box,
  Stack,
  Input,
  Text,
  Flex,
  Textarea,
  Button,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <Box
      // h={["1000px", "1050px", "700px"]}
      color={useColorModeValue("black", "white")}
    >
      <Text
        mb="25px"
        margin="auto"
        textAlign="center"
        fontWeight="700"
        fontSize={["3xl", "4xl", "5xl"]}
        // color={"#00b9e8"}
        mt={"10%"}
        boxShadow="rgb(121,80,242) 3px 2px 20px 1px" 
        padding={{md:"5px 20px",base:"5px 40px"}}
        borderTopEndRadius="150px"
                  borderBottomLeftRadius="150px"
        w={{lg:"40%" , md:"50%" , base:"90%"}}
   
       
      >
        Contact Me
      </Text>
      <Box
        display={["inline", "inline", "flex"]}
        gap={"70px"}
        border={"0px solid #845ef7"}
        className="contact"
        id="contact"
        w={["100%", "97%", "79%"]}
        fontSize={30}
        // color={"black"}
        m={"auto"}
        mt={"5%"}
        h={"500px"}
      >
        <Box w={["100%", "80%", "50%"]} margin="auto" mb={"30px"}>
          <Stack>
            <Text
              color={useColorModeValue("#845ef7", "#845ef7")}
              fontSize={["20px", "25px", "30px"]}
              textAlign={["center", "center", "left"]}
            >
              Get in Touch
            </Text>

            <Grid
              // border={"1px solid #845ef7"}
              justifyContent={{ base: "center", md: "left", lg: "left" }}
              alignItems={{ base: "center" }}
              gap="20px"
            >
              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                    mt={"5px"}
                  >
                    <TfiEmail />
                  </Text>
                  <Text
                    id="contact-email"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["4px", "", ""]}
                  >
                    <a
                      href="mailto:someshrawat106@gmail.com"
                      alt="githublink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      satya2maity@gmail.com
                    </a>
                  </Text>
                </Flex>
              </Box>

              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                  >
                    <a
                      href="https://github.com/Satyaranjan8414"
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <AiFillGithub />
                    </a>
                  </Text>
                  <Text
                    id="contact-github"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["3px", "", ""]}
                  >
                    <a
                      href="https://github.com/Satyaranjan8414"
                      alt="githublink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Text>
                </Flex>
              </Box>

              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                  >
                    <a
                      href="https://www.linkedin.com/in/satyaranjan-maity-071058206/"
                      alt=""
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <FaLinkedin />
                    </a>
                  </Text>
                  <Text
                    id="contact-linkedin"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["1px", "", ""]}
                  >
                    <a
                      href="https://www.linkedin.com/in/satyaranjan-maity-071058206/"
                      alt="linkedinlink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Satyaranjan Maity
                    </a>
                  </Text>
                </Flex>
              </Box>

              <Box mt={"5px"}>
                <Flex gap={"20px"}>
                  <Text
                    // ml={["50px", "100px", "1px"]}
                    fontSize={["20px", "30px", "40px"]}
                  >
                    <a
                      href="https://github.com/Satyaranjan8414"
                      fontSize={["20px", "30px", "40px"]}
                    >
                      <IoCall />
                    </a>
                  </Text>
                  <Text
                    id="contact-phone"
                    // color={"white"}
                    fontSize={["14px", "20px", "22px"]}
                    // ml={["8%", "", ""]}
                    mt={["1px", "", ""]}
                  >
                    + 91 6294018414
                  </Text>
                </Flex>
              </Box>
            </Grid>
          </Stack>
        </Box>

        <form
          action="https://getform.io/f/db29299d-1aee-4f2c-9ca7-d2bd5c6e1db7"
          method="POST"
        >
          <Box
            w={["90%", "70%", "90%"]}
            mt={["100px", "100px", "0px"]}
            margin="auto"
            // marginTop={{ base: "0px", md: "0" }}
            // h={"400px"}
            // ml={["70px", "100px", "-5%"]}
            // boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            p="35px"
            borderRadius={"20px"}
          >
            <Stack>
              <Stack>
                <Text
                  color={"#845ef7"}
                  fontSize={["20px", "25px", "30px"]}
                  textAlign={["center", "center", "left"]}
                  mt={["-10px", "", ""]}
                >
                  Message Me
                </Text>
                <Flex>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    size={["md", "lg", "lg"]}
                    // color={"white"}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    size={["md", "lg", "lg"]}
                    // color={"white"}
                    ml={"20px"}
                  />
                </Flex>
              </Stack>

              <Stack mt={"20px"}>
                <Input
                  type="number"
                  name="number"
                  placeholder="Mobile Number"
                  size={["md", "lg", "lg"]}
                  // color={"white"}
                  m={"auto"}
                  mt={"8%"}
                  
                />
              </Stack>

              <Stack mt={"20px"}>
                <Textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  size={["md", "lg", "lg"]}
                  // color={"white"}
                  m={"auto"}
                  mt={"8%"}
                />
              </Stack>
              <Stack mt={"20px"}>
                <Button
                  type="submit"
                  w={["50%", "30%", "50%"]}
                  h={["35px", "40px", "45px"]}
                  mt={"5%"}
                  ml={["56px", "170px", "100px"]}
                  size="lg"
                  color={"white"}
                  fontSize={["15px", "19px", "20px"]}
                  bg={"#845ef7"}
                  _hover={{
                    background: "#b197fc",
                    color: "black",
                  }}
                >
                  Send
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Box>
      <Text
        textAlign={"center"}
        fontSize={{ base: "12px", md: "16px" }}
        marginTop={{ base: "20px" }}
        color={useColorModeValue("#845ef7", "#845ef7")}
      >
        Desgined & Build By Satyaranjan Maity, 2023
      </Text>
    </Box>
  );
};

export default Contact;
