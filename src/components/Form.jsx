function Form() {
  const handleSubmit = () => {};

  return (
    <div className="form-container">
      <div>
        <label htmlFor="">Budget Amount</label>
        <input type="number" placeholder="Budget Amount" />
      </div>
      <div>
        <label htmlFor="">Number of Envelopes</label>
        <input type="number" placeholder="Number of Envelopes" />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Form;
