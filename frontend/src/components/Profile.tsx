import {
  Avatar,
  Box,
  Center,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { selectName, useAppSelector } from "../features/store";

export const Profile = () => {
  const bgcolor = useColorModeValue("white", "whiteAlpha.50");
  const reduxName = useAppSelector(selectName);

  return (
    <Center>
      <Box
        p="120"
        borderWidth="1px"
        borderRadius="lg"
        bg={bgcolor}
        shadow="md"
        marginTop="2em"
      >
        <Avatar aria-label={`Avatar`} size="2xl" bg="teal.500" />
        <Box
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="2xl"
          marginTop="1em"
        >
          {reduxName}
        </Box>
      </Box>
    </Center>
  );
};

export default Profile;
