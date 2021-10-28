import { Center, VStack, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { FilterBox } from "./FilterBox";
import { PageContent } from "./PageContent";
import { PaletteContext, palettes } from "./Palette";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  let palette = useColorModeValue(palettes["light"], palettes["dark"]);
  const bgcolor = useColorModeValue("teal", "whiteAlpha.50");

  return (
    <PaletteContext.Provider value={palette}>
      <div className="App">
        {/* <Box id="footer" bg={bgcolor} color={"white"} boxShadow={3}>
          <div id="footerContent">
            <span>Made with love by group 6 </span>
          </div>
        </Box> */}

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          {/* <Route path="/profile">
            <Profile />
          </Route> */}
          <Route path="main">
            <Center>
              <VStack w="100%" spacing={4}>
                <FilterBox />
                <PageContent />
              </VStack>
            </Center>
          </Route>
          <Route path="/">
            <Center>
              <VStack w="100%" spacing={4}>
                <FilterBox />
                <PageContent />
              </VStack>
            </Center>
          </Route>
          <Route path="/">
            <h2>404 </h2>
          </Route>
        </Switch>
      </div>
    </PaletteContext.Provider>
  );
}

export default App;
