import { useQuery } from "@apollo/client";
import { Divider, Grid, Heading, VStack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { selectName, useAppSelector } from "../features/store";
import { GET_FAVORITES } from "../services/graphql";
import FavoriteContainer from "./FavoriteContainer";

export const Profile = () => {
  const history = useHistory();
  const reduxName = useAppSelector(selectName);

  if (!reduxName) history.push("/login");

  const { loading, error, data } = useQuery(GET_FAVORITES, {
    variables: {
      name: reduxName,
    },
    fetchPolicy: "no-cache"
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  console.log(data);

  return (
    <VStack>
      <Heading size="xl" pt={10} pb={3}>
        Favorite Pokémon of {reduxName}
      </Heading>
      <Divider />
      <Grid
        pt={5}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
      >
        {data.user.favorites.map((p: Number) => (
          <FavoriteContainer id={p} />
        ))}
      </Grid>
    </VStack>
  );
};

const Loading = () => {
  return <div>Loading...</div>;
};

const Error = (props: { error: any }) => {
  console.log(props.error);

  return <div>Error :'(</div>;
};

export default Profile;
