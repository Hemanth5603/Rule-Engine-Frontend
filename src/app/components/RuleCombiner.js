import { useState } from 'react';
import { toast } from 'react-toastify';
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
      .then((res) => {
        if (res.status === 200) {  // Check if status is 200
          return res.json();
        } else {
          throw new Error('Failed to combine rules.');
        }
      })
      .then((data) => {
        if (data.status === "true") {
          console.log('Combined Rule ID:', data.id);
          alert("Rule Combined successfully, Please Refresh")
          onCombine(data.id); // Use the ID of the combined rule
        } else {
          toast.error('Failed to combine rules.'); // Toast error message
        }
      })
      .catch((err) => {
        console.error('Error combining rules:', err);
        alert("error combining rules")
      });

    // Clear input fields after combination (optional)
    setFirstRuleId('');
    setSecondRuleId('');
    setLogicalOperator('');
  };
  return (
    <div>
      <div>
        <label>First Rule ID: </label>
        <input
          type="number"
          value={firstRuleId}
          onChange={(e) => setFirstRuleId(e.target.value)}
          required
        />
      </div>
      <br/>
      <div>
        <label>Second Rule ID: </label>
        <input
          type="number"
          value={secondRuleId}
          onChange={(e) => setSecondRuleId(e.target.value)}
          required
        />
      </div>
      <br/>
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
      <br/>
      <button onClick={handleCombine}>Combine Selected Rules</button>
    </div>
  );
}
