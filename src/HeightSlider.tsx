import {
  Text,
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

export const HeightSlider = () => {
  const [edges, setEdges] = useState([0, 100]);

  return (
    <Box py={4}>
      <Flex>
        <Text align="left"> Min </Text>
        <Spacer />
        <Text align="right"> Max </Text>
      </Flex>

      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[0, 100]}
        onChange={(val) => setEdges(val)}
        colorScheme="teal"
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>

      <Flex>
        <Text align="left"> {edges[0]}kg </Text>
        <Spacer />
        <Text align="right"> {edges[1]}kg </Text>
      </Flex>
    </Box>
  );
};
