import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
export const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="aside" bg="gold">
        <Text>Aside</Text>
      </GridItem>
      <GridItem area="main" bg="skyblue">
        <Text>Main</Text>
      </GridItem>
    </Grid>
  );
};
