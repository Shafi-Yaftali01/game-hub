import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
