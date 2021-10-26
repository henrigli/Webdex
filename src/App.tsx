import { Box, HStack, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { FilterBox } from "./FilterBox";
import { PageContent } from "./PageContent";
import { Palette, PaletteContext, usePalette, palettes } from "./Palette";

function App() {
  let palette = useColorModeValue(palettes["light"], palettes["dark"]);
  const bgcolor = useColorModeValue("teal", "whiteAlpha.50");

  return (
    <PaletteContext.Provider value={palette}>
      <div className="App">
        <HStack>
          <FilterBox />
          <PageContent />
        </HStack>
        {/* <Box id="footer" bg={bgcolor} color={"white"} boxShadow={3}>
          <div id="footerContent">
            <span>Made with love by group 6 </span>
          </div>
        </Box> */}
      </div>
    </PaletteContext.Provider>
  );
}

export default App;
