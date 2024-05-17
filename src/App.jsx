import { useState } from "react";
import Envelope from "./components/Envelopes";
import Form from "./components/Form";
import SideBarForm from "./components/SideBarForm";
import "./index.css";

function App() {
  const [amount, setAmount] = useState("");
  const [envelopes, setEnvelopes] = useState("");
  const [valueEnv, setValueEnv] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const handleSubmit = () => {
    let value = amount / envelopes;
    setValueEnv(value);
    setFormSubmitted(true); // Set formSubmitted to true after form submission
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
      <SideBarForm />
      {/* Render envelopes if form has been submitted */}
      {formSubmitted && (
        <div className="envelopes-container">
          {[...Array(Number(envelopes))].map((_, index) => (
            <Envelope key={index} valueEnv={valueEnv} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
