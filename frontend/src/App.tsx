import { Center, VStack, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { FilterBox } from "./components/FilterBox";
import { PageContent } from "./components/PageContent";
import { PaletteContext, palettes } from "./Palette";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PokemonPage from "./components/PokemonPage";
import Profile from "./components/Profile";

function App() {
  let palette = useColorModeValue(palettes["light"], palettes["dark"]);

  return (
    <PaletteContext.Provider value={palette}>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokemonPage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
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
