import { ButtonGroup, IconButton, useBoolean } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

export const SortingButtons = () => {
  const [flag, setFlag] = useBoolean();
  return (
    <ButtonGroup isAttached>
      <IconButton
        onClick={setFlag.on}
        aria-label="Sort high to low"
        icon={<TriangleDownIcon />}
      />
      <IconButton
        onClick={setFlag.off}
        aria-label="Sort low to high"
        icon={<TriangleUpIcon />}
      />
      <p>Boolean state: {flag.toString()}</p>
    </ButtonGroup>
  );
};
