import { GridItem, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
    <GridItem
    className="skills-card"
      p={5}
      rounded="2xl"
      

      
      _hover={{
        boxShadow:"rgb(121,80,242) 3px 2px 20px 1px" ,
        transform: "scale(1.1)",
        transition: "all .2s ease-in-out",
        borderRadius:"20%",

      }}
    >
      <VStack>
        <Image className="skills-card-img" src={icon} w="100%"/>
        <Text className="skills-card-name" fontSize="sm">{name}</Text>
      </VStack>
    </GridItem>
  );
};

export default SkillCard;
