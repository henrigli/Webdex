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
import {
  setMaxWeight,
  setMinWeight,
  useAppDispatch,
} from "../features/search/searchSlice";

export const WeightSlider = () => {
  const [edges, setEdges] = useState([0, 1000]);
  const dispatch = useAppDispatch();

  return (
    <Box py={4}>
      <Flex>
        <Text align="left"> Min </Text>
        <Spacer />
        <Text align="right"> Max </Text>
      </Flex>

      <RangeSlider
        max={1000}
        aria-label={["min", "max"]}
        defaultValue={[0, 1000]}
        onChange={(val) => setEdges(val)}
        onChangeEnd={() => {
          dispatch(setMinWeight(edges[0]));
          dispatch(setMaxWeight(edges[1]));
        }}
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
