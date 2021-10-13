import { Box, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { Palette, PaletteContext, usePalette, palettes } from "./Palette";

function App() {
  let palette = useColorModeValue(palettes["light"], palettes["dark"]);
  const bgcolor = useColorModeValue("teal", "whiteAlpha.50");

  return (
    <PaletteContext.Provider value={palette}>
      <div className="App">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" px={3} h={400}>
          Input
        </Box>
        <Box id="footer" bg={bgcolor} color={"white"} boxShadow={3}>
          <div id="footerContent">
            <span>Made with love </span>
          </div>
        </Box>
      </div>
    </PaletteContext.Provider>
  );
}

export default App;
