import { useState } from "react";
import Envelope from "./components/Envelopes";
import Form from "./components/Form";

function App() {
  const [amount, setAmount] = useState("");
  const [envelopes, setEnvelopes] = useState("");
  const [valueEnv, setValueEnv] = useState(0);

  const handleSubmit = () => {
    let value = amount / envelopes;
    setValueEnv(value);
  };

  return (
    <div className="app">
      <Form
        amount={amount}
        setAmount={setAmount}
        envelopes={envelopes}
        setEnvelopes={setEnvelopes}
        handleSubmit={handleSubmit}
      />
      <Envelope />
      {/* {valueEnv} */}
    </div>
  );
}

export default App;
