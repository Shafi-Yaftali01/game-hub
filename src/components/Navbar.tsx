import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

export const Navbar = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center" p={4}>
      <Image src={logo} alt="logo" boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
};
