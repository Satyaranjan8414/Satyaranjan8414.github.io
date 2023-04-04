import React from "react";
import {
  Box,
  Grid,
  useBreakpointValue,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Heading,
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";
// import SkillCard from "./SkillCard";
// import { skillsData } from "../../constants/skillsData";
export const skillsData = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "Javascript",
    category: "frontend",
  },
  {
    icon: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
    name: "HTML",
    category: "frontend",
  },
  {
    icon: "https://img.icons8.com/fluency/512/css3.png",
    name: "CSS",
    category: "frontend",
  },

  {
    icon: "https://alih6051.github.io/static/media/bootstrap.9d52c09ec3d831cca7244e06743aed7d.svg",
    name: "Bootstrap",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/tailwind.e7b4a92d5aefbddd6f0651c024144be2.svg",
    name: "Tailwind",
    category: "frontend",
  },
  {
    icon: "https://img.icons8.com/plasticine/512/react.png",
    name: "React",
    category: "frontend",
  },
  {
    icon: "https://cdn.cdnlogo.com/logos/n/80/next-js.svg",
    name: "Next JS",
    category: "frontend",
  },
  {
    icon: "https://img.icons8.com/color/2x/redux.png",
    name: "Redux",
    category: "frontend",
  },
  {
    icon: "https://alih6051.github.io/static/media/chakra.15320604467d004df871.png",
    name: "Chakra UI",
    category: "frontend",
  },
  {
    icon: "https://img.icons8.com/color/512/material-ui.png",
    name: "Material UI",
    category: "frontend",
  },
  {
    icon: "https://img.icons8.com/fluency/2x/node-js.png",
    name: "Node JS",
    category: "backend",
  },
  {
    icon: "https://img.icons8.com/color/512/python.png",
    name: "Python",
    category: "backend",
  },
  {
    icon: "https://img.icons8.com/color/512/express.png",
    name: "Express",
    category: "backend",
  },
  {
    icon: "https://alih6051.github.io/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg",
    name: "MongoDB",
    category: "backend",
  },
  {
    icon: "https://img.icons8.com/color/512/mongoose.png",
    name: "Mongoose",
    category: "backend",
  },
  {
    icon: "https://img.icons8.com/nolan/512/git.png",
    name: "Git",
    category: "frontend",
  },
  {
    icon: "https://code.visualstudio.com/assets/images/code-stable.png",
    name: "VS Code",
    category: "tool",
  },
  {
    icon: "https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.5.1/1678365054933/Microsoft.VisualStudio.Services.Icons.Default",
    name: "Thunder Client",
    category: "tool",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2175/2175377.png",
    name: "Github",
    category: "tool",
  },
];

const SkillsList = () => {
  const frontend_skills = skillsData.filter(
    (skill) =>
      skill.category === "frontend" ||
      skill.name === "Git" ||
      skill.name === "Postman"
  );

  const backend_skills = skillsData.filter(
    (skill) =>
      skill.category === "backend" ||
      skill.name === "Git" ||
      skill.name === "Postman"
  );

  const tools = skillsData.filter(
    (skill) =>
      skill.category === "tool" ||
      skill.name === "Git" ||
      skill.name === "Postman"
  );

  return (
    <Box h="70%">
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={10}>
        <Text
          as={"span"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: useBreakpointValue({ base: "20%", md: "30%" }),
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "#845ef7",
            zIndex: -1,
          }}
          boxShadow="rgb(121,80,242) 3px 2px 20px 1px" 
          padding={{md:"5px 100px",base:"5px 15px"}}
          borderTopEndRadius="150px"
                    borderBottomLeftRadius="150px"
        >
          Technical Skills
        </Text>
      </Heading>
      <Tabs variant="unstyled" align="center">
        <TabList my={5}>
          <Tab
            _selected={{ color: "white", bg: "#845ef7" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            All
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#845ef7" }}
            bg="white"
            color="black"
            mx={3}
            rounded="md"
          >
            Frontend
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#845ef7" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            Backend
          </Tab>
          {/* <Tab
            _selected={{ color: "white", bg: "#845ef7" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            Tools
          </Tab> */}
        </TabList>

        <TabList my={5}>
          <Tab
            _selected={{ color: "white", bg: "#845ef7" }}
            bg="#fff"
            color="black"
            mx={3}
            rounded="md"
          >
            Tools
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {skillsData.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {frontend_skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel paddingBottom="100px">
            <Grid
            
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {backend_skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>

          <TabPanel paddingBottom="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
                xl: "repeat(8, 1fr)",
              }}
              gap={10}
            >
              {tools.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SkillsList;
