import { useState } from "react";
import Envelope from "./components/Envelopes";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Form />
      <Envelope />
    </div>
  );
}

export default App;
