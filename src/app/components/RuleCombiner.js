import { useState } from 'react';

export default function RuleCombiner({ onCombine }) {
  const [firstRuleId, setFirstRuleId] = useState('');
  const [secondRuleId, setSecondRuleId] = useState('');
  const [logicalOperator, setLogicalOperator] = useState('');

  const handleCombine = () => {
    // Validate that both IDs and operator are selected
    if (!firstRuleId || !secondRuleId || !logicalOperator) {
      alert('Please enter two rule IDs and select a logical operator.');
      return;
    }

    // Call the backend API to combine the rules by their root node IDs and operator
    fetch('https://rule-engine-backend-production.up.railway.app/api/combine-rules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rootNodeIds: [parseInt(firstRuleId), parseInt(secondRuleId)],  // Convert the input strings to integers
        operator: logicalOperator, // Send the logical operator (AND/OR)
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "true") {
          console.log('Combined Rule ID:', data.id);
          alert(`Combined Rule successfully created with ID: ${data.id}`);
          onCombine(data.id); // Use the ID of the combined rule
        } else {
          alert('Failed to combine rules.');
        }
      })
      .catch((err) => console.error('Error combining rules:', err));

    // Clear input fields after combination
    
  };

  return (
    <div>
      <h2>Combine Rules</h2>
      <div>
        <label>First Rule ID: </label>
        <input
          type="number"
          value={firstRuleId}
          onChange={(e) => setFirstRuleId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Second Rule ID: </label>
        <input
          type="number"
          value={secondRuleId}
          onChange={(e) => setSecondRuleId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Logical Operator: </label>
        <select
          value={logicalOperator}
          onChange={(e) => setLogicalOperator(e.target.value)}
          required
        >
          <option value="">Select Operator</option>
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </div>
      <button onClick={handleCombine}>Combine Selected Rules</button>
    </div>
  );
}
