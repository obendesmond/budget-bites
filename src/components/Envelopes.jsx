import "./Envelope.css";

function Envelope({valueEnv}) {
  return (
    <div className="env-container">
      <h1>${valueEnv}</h1>
      <input type="number" placeholder="Enter Amount Spent..." />
    </div>
  );
}

export default Envelope;
