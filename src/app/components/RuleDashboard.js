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
      <h2>Rule Management</h2>
      <ul>
        {rules.map((rule) => (
          <li key={rule.id}>
            <strong>ID: {rule.id}</strong> - {rule.expression}{' '}
            <button onClick={() => onEdit(rule)}>Edit</button>
            <button onClick={() => onDelete(rule.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
