import next from 'next';
import { useState } from 'react';

export default function RuleForm({ onSubmit }) {
  const [attribute, setAttribute] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState('');
  const [logicalOperator, setLogicalOperator] = useState('');
  const [nextAttribute, setNextAttribute] = useState('');
  const [nextOperator, setNextOperator] = useState('');
  const [nextValue, setNextValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const rule = { attribute, operator, value, logicalOperator, nextAttribute, nextOperator, nextValue};
    onSubmit(rule);
    // Clear the form after submission
    // setAttribute('');
    // setOperator('');
    // setValue('');
    // setLogicalOperator('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Attribute: </label>
        <input
          type="text"
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Operator: </label>
        <select value={operator} onChange={(e) => setOperator(e.target.value)} required>
          <option value="">Select Operator</option>
          <option value=">">Greater than</option>
          <option value="<">Less than</option>
          <option value="=">Equal to</option>
        </select>
      </div>
      <div>
        <label>Value: </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Logical Operator (AND/OR): </label>
        <select
          value={logicalOperator}
          onChange={(e) => setLogicalOperator(e.target.value)}
          required
        >
          <option value="">Select Logical Operator</option>
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
        
      </div>
      <div>
        <label>NextAttribute: </label>
        <input
          type="text"
          value={nextAttribute}
          onChange={(e) => setNextAttribute(e.target.value)}
          required
        />
      </div>
      <div>
        <label>NextOperator: </label>
        <select value={nextOperator} onChange={(e) => setNextOperator(e.target.value)} required>
          <option value="">Select Operator</option>
          <option value=">">Greater than</option>
          <option value="<">Less than</option>
          <option value="=">Equal to</option>
        </select>
      </div>
      <div>
        <label>NextValue: </label>
        <input
          type="text"
          value={nextValue}
          onChange={(e) => setNextValue(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Rule</button>
    </form>
  );
}
