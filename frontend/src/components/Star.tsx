import { Icon } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const Star = (props: { isFavorite: boolean, onClick: () => void}) => {
  return (
    <IconButton
      aria-label="Favorite"
      icon={
        <Icon
          as={props.isFavorite ? AiFillStar : AiOutlineStar}
          w={10}
          h={10}
          color="yellow.300"
        />
      }
      marginTop="1em"
      marginRight="2em"
      float="right"
      variant="ghost"
      onClick={props.onClick}
    />
  );
};
