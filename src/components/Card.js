import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div>
      <Image src={imageSrc} alt={description} />
      <HStack>
        <Heading as="h2">
          {title}
        </Heading>
      </HStack>
      <Text>{description}</Text>
      <Text>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    </div>
  );
};

export default Card;
