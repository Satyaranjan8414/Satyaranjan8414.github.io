import {
  Box,
  Image,
  Text,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { MdSlideshow } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";


import React from "react";

function Projects() {
  let projectdata = [
  {
    img: "https://i.ibb.co/JyBft7N/Screenshot-1207.png",
    title: "Desktime-Clone",
    des: "Track User Productivity, URLs & Apps Activity, Record Titles of Documents or Files & More. Employee Computer Usage Monitoring Software - See Where Your Employees Spend Hours On.",
    demo: "",
    live: " https://splendid-pegasus-4e8342.netlify.app/",
    gitHub: "https://github.com/Satyaranjan8414/desktime.com",
    technologies: ["HTML", "Chakra-UI", "JavaScript" ,"React"],
  },
  {
    img: "https://i.ibb.co/ZJfm1dC/Screenshot-1210.png",
    title: "Apple TV-Clone",
    des: "Apple TV+ is a streaming service from Apple. It features exclusive Apple Original shows and movies from some of the industry's top talent, with new premieres ...",
    demo: "",
    live: "https://warm-platypus-01b5b2.netlify.app/",
    gitHub: "https://github.com/Satyaranjan8414/AppleTV.com",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    img: "https://i.ibb.co/7rtkqqw/Screenshot-1214.png",
    title: "Intern Theory-Clone",
    des: "Upskill yourself by enrolling for Intern Theory's Online Courses. Find internships for students in different cities in India with top brands in 2022.",
    demo: "",
    live: "https://jazzy-yeot-8e721e.netlify.app/",
    gitHub: "https://github.com/Satyaranjan8414/intern_theory/tree/main/-lawful-dinner-785-main/-lawful-dinner-785-main",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    img: "https://user-images.githubusercontent.com/97522154/208038198-80ece65b-59a6-42bc-aba6-238e8223e0f3.png",
    title: "Skin-Store-Clone",
    des: "Skin-Store is an online retailer offering a wide range of skin care products including makeup, sun care, and body products. We provide natural, safe and effective solutions for every skin type and skin concern. ",
    demo: "",
    live: "https://elaborate-gingersnap-3b04f7.netlify.app/",
    gitHub: "https://github.com/stormyvikrant/ProjectSkinStore",
    technologies: [
      "React",
      "CSS",
      "HTML",
      "Chakra UI",
      "Javascript"
    ],
  }
];




  return (
    <Box
      id="projects"
      className="project"
      w="full"
      // color="#ffffff"
      p="30px 0px"
      textAlign="center"
      pt={20}
    >
      <Box w="85%" m="auto">
        <Box
          gap={"10px"}
          display={"flex"}
          mb="25px"
          justifyContent={"center"}
          fontWeight="400"
        >
          <Text
            // ml={["110px", "200px", "490px"]}
            textAlign="center"
            // color={useColorModeValue('','')}
            fontWeight={700}
            fontSize={["3xl", "4xl", "5xl"]}
            boxShadow="rgb(121,80,242) 3px 2px 20px 1px" 
            padding={{md:"5px 100px",base:"5px 70px"}}
            borderTopEndRadius="150px"
                      borderBottomLeftRadius="150px"
          >
            Projects
          </Text>
          <Text mt={["8px", "10px", "15px"]} fontSize={["3xl", "4xl", "5xl"]}>
            <MdSlideshow className="bounce" color={"#845ef7"} />
          </Text>
        </Box>
        <Box display="grid" gap="50px" gridTemplateColumns="repeat(1, 1fr)">
          {projectdata &&
            projectdata.map(({img,title,des,live,github,technologies},ind) => {
              
              return (
                <Box key={ind} className="project-card" bg={"#0c1014"}
                boxShadow="rgb(121,80,242) 3px 2px 20px 1px" 
                borderTopEndRadius={{md:"150px",base:"20px"}}
                borderBottomLeftRadius={{md:"150px",base:"20px"}}
                >
                  <Box
                    display={["inline", "inline", "flex"]}
                    rowGap="60px"
                    justifyContent="space-between"
                    border={"3px solid #845ef7"}
                    borderTopEndRadius="150px"
                    borderBottomLeftRadius="150px"
                  >
                    <Image
                      w={["100%", "97%", "60%"]}
                      m="auto"
                      src={img}
                      alt="project-thumbnail"
                      borderBottomLeftRadius="70px"
                    />
                    <Box w={["100%", "97%", "39%"]} m="auto" p={"30px"}>
                      <Text
                        fontSize={["2xl", "3xl", "4xl"]}
                        className="project-title"
                        // color="#fff"
                        color={"#845ef7"}
                        mb="30px"
                        mt={"20px"}
                      >
                        {title}
                      </Text>
                      {/* <Text fontSize={["xl", "2xl", "3xl"]}>
                        ( {project.type} )
                      </Text> */}
                      <Text
                        className="project-description"
                        textAlign={"left"}
                        w={["100%", "90%", "90%"]}
                        m="auto"
                        fontSize={["sm", "md", "md"]}
                        color="#fff"
                        mb="30px"
                      >
                        {des}
                      </Text>
                      <Flex w={["100%", "90%", "90%"]}>
                        <Text
                          className="project-tech-stack"
                          // w={["100%", "90%", "90%"]}
                          m="auto"
                          mt="10px"
                          fontSize={["md", "md", "lg"]}
                          color="#fff"
                          mb={["0", "0", "20px"]}
                        >
                          Techstacks
                        </Text>
                        <Text
                          className="project-tech-stack"
                          // w={["100%", "90%", "90%"]}
                          // m="auto"
                          mt="10px"
                          fontSize={["sm", "md", "md"]}
                          color="#fff"
                        >
                          - {technologies.join(" ")}
                        </Text>
                      </Flex>
                      <Box
                        display="flex"
                        w={["100%", "80%", "100%"]}
                        m="auto"
                        justifyContent="space-around"
                      >
                        <Button
                          className="project-deployed-link"
                          as="a"
                          // color={useColorModeValue('black','white')}
                          target="_blank"
                          href={live}
                          _hover={{ color: "#845ef7" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          // color="black"
                          // border="1px solid white"
                          variant="solid"
                          leftIcon={<BiLinkExternal />}
                        >
                          Live
                        </Button>
                        <Button
                          className="project-github-link"
                          as="a"
                          target="_blank"
                          href={github}
                          _hover={{ color: "#845ef7" }}
                          mt="10px"
                          w={"100px"}
                          p={["5px 5px", "10px 10px", "10px 10px"]}
                          fontSize={["md", "lg", "lg"]}
                          // color="black"
                          // border="1px solid white"
                          variant="solid"
                          leftIcon={<BsGithub />}
                        >
                          Github
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
export default Projects;
