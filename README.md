This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## How to start
1. Clone project
2. > cd frontend
3. > npm install
4. > npm start
5. Enjoy!

# **Documentation**

## Layout and design

The website design is made using the Chakra UI component library.

### Header

The Header was made using the Chakra UI Flex component, which again contains a Flex component, the SmallLogin and the ColorModeSwitcher componenent. The background-color to the Header changes depending on the color mode using the const bgcolor. bgcolor uses the Chakra UI hook useColorModeValue, which allows you to choose two colors depending on the colormode selected.

### ColorModeSwitcher

The ColorModeSwitcher is a component from Chakra UI that supplies an easy-to-use icon-button that allows you to change the colormode, and which works with the useColorModeValue hook.

### Web accessibility

According to the Web Accessibility Initiative it’s most efficient and effective to incorporate accessibility from the very beginning of projects, so you don’t need go back and to re-do work. Because of this we worked on making our website accessible from the start. A lot of our knowledge on this subject comes from the Web Accessibility Initiative (w3.org). We found that this source had a lot of thorough information about how we could make our website as inclusive as possible.

The first thing we focused on was text alternatives as equivalents for non-text content. We implemented short equivalents for images, including icons, buttons, and graphics. Secondly, we made labels for form controls, input, and other user interface components.

Our second focus area was to make the content easily distinguishable. This is to make everything easier to see and hear. We made sure that color isn’t used as the only way of conveying information or identifying content. It was also important to us that default foreground and background color combinations provide sufficient contrast.

We chose to test one aspect of web accessibility by trying to navigate it with a screen reader. Because all the developers on this project can navigate most web pages without problem, we found that we couldn’t judge very well how accessible the web page was. Testing with a screen reader helped us find spelling mistakes, check the accuracy and quality of our alternative image texts and helped us identify problems with reading order, form elements, and many other aspects of accessibility.

## Searching

Searching is achieved using the SearchBar.tsx component, GraphQL + Apollo and Redux. The SearchBar sets the input as _query_ onChange(). When submitted using the 'Submit' button, _query_ replaces the graphql paramater _filter_, using the Redux dispatch method and setFilter(query).

## Filtering

Filtering is achieved using the WeightSlider.tsx component, GraphQL + Apollo and Redux. The WeightSlider uses the RangeSlider component from the Chakra-UI library to retrieve to variables, minimum weight and maximum weight. When the user releases the slider, the min and max values replaces the GraphQL paramater _minWeight_ and _maxWeight_ paramaters, using the Redux dispatch method and setMinWeight() and setMaxWeight().

## Sorting

Sorting is achieved using the SortDropdownMenu.tsx component, GraphQL + Apollo and Redux. SortDropdownMenu uses the Menu componenet from Chakra-UI with four items corresponding to the four paramaters the user can sort on. When the desired paramater has been selected, it replaces the GraphQL paramater _sort_, using the Redux dispatch method and setSort().

## GraphQL queries

We use apollo-client to manage our graphQL queries in the frontend. This allows us to write queries using regular graphQL syntax, and pass them to a simple useQuery or useMutation function from apollo-client. The queries are all located in `frontend/src/services/graphql.ts` and can be imported everywhere in the frontend, eg. on the login and signup page. Apollo-client handles sending the request and gives 3 values, data, loading and error. using these we can tell the user if the request is on its way, if there was an error while processing the request, and finally show them the data one the request has gone through.

## Pagination

This is implemented by simply making _skip_ and _limit_ available as variables in GraphQL queries. These are added to the MongoDB query to control the flow of information. On the website, the user can increase or decrease _skip_ by multiples of _limit_ using buttons.

## Backend

We use express-graphql to manage our backend. To run the backend locally you first need to compile server.ts to javascript, this is done using the `tsc server.ts` command. This will compile user.ts, pokemon.ts and server.ts to javascript and render .js files for each of them. To run the backend you run `node server.js`. For this to acually have some data to handle, you need to setup a mongoDB database on your own system and populate it using the JSON file found [here.](http://it2810-06.idi.ntnu.no/pokemon.json)

The schemas' and interfaces for user and pokemon can be found in pokemon.ts and user.ts. The schema that is actually interpreted by graphQL can be found in server.ts and is made using `buildSchema`. This is where all the mutations and queries are defined. The resolvers for these can be found in the `root` object just below the `buildSchema` function. This is where the actual backend _logic_ is located, and is where we handle requests.

## Favorites

The user can press the "Star"-button (and change the star-icon from empty to full) and have the Pokémon appear in the users profile-page. The user can also press the "Star"-button again to remove the Pokémon from their favorites.

## Testing:
For end-to-end testing we have used the testing framework Cypress. Cypress takes snapshots while the test runs to give full control and enables us to debug directly in Developer Tools. We have tested functionality for signup and login, search, favoriting a Pokemon among other things. To test the signup-functionality we first navigate to the signup-page, then we type in a randomly generated username and click «sign up». Afterwords we check if the username we typed in is displayed in the header.

While our Cypress tests cover all uses we deem necessary, we also have a few unit tests of key components in addition to this. As unit tests finish quickly and can be run without a connected server, they are a good supplement to the more complete E2E testing.
