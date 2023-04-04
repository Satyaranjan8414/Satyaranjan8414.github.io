import { Container } from "@chakra-ui/react";
import React from "react";
// import SectionHeading from "../universal/SectionHeading";
import SkillsList from "./SkillsList";
// import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <Container minH="100vh" maxW="7xl" id="skills" textAlign={"center"} pt={24}>
      <SkillsList />
    </Container>
  );
};

export default Skills;
