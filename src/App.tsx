import Alert from "./components/Alerts";
import { useState } from "react";
const App = () => {
  const [showAlert, setShowAlert] = useState(true);
  return showAlert ? (
    <Alert onClose={() => setShowAlert(false)}>
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
    </Alert>
  ) : null;
};
export default App;
