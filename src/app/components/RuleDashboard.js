import { useEffect, useState } from 'react';

export default function RuleDashboard({ onDelete, onEdit }) {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    // Fetch existing rules from the backend
    fetch('https://rule-engine-backend-production.up.railway.app/api/get-all-nodes')
      .then((res) => res.json())
      .then((data) => setRules(data.expressions)); // Adjusted to handle the 'expressions' array with ID and expression
  }, []);

  return (
    <div>
      <br />
      {rules === null ? (
        // If the rules array is empty, show an empty space or a message
        <p>No rules available</p>
      ) : (
        <ul>
          {rules.map((rule) => (
            <li key={rule.id}>
              <strong>ID: {rule.id}</strong> - {rule.expression}{' '}
              {/* <button onClick={() => onDelete(rule.id)}>Delete</button> */}
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
