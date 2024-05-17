/* eslint-disable react/prop-types */

function Form({ amount, setAmount, envelopes, setEnvelopes, handleSubmit }) {
  return (
    <div className="form-container">
      <div className="form-input">
        <label htmlFor="">Budget Amount</label>
        <input
          type="number"
          placeholder="Budget Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Number of Envelopes</label>
        <input
          type="number"
          placeholder="Number of Envelopes"
          value={envelopes}
          onChange={(e) => setEnvelopes(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
