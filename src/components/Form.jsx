function Form() {
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
    </div>
  );
}

export default Form;
