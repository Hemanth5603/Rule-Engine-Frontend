import { useState } from 'react';

export default function RuleEvaluator({ onEvaluate }) {
  const [attributes, setAttributes] = useState({
    age: '',
    department: '',
    salary: '',
    experience: '',
  });

  // Handle changes to the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttributes((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission and send data for evaluation
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedAttributes = {
      age: parseInt(attributes.age), // Ensure age is a number
      department: attributes.department, // Ensure department is a string
      salary: parseInt(attributes.salary), // Ensure salary is a number
      experience: parseInt(attributes.experience), // Ensure experience is a number
    };
    onEvaluate(formattedAttributes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Rule Evaluation</h2>
      <div>
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={attributes.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Department: </label>
        <input
          type="text"
          name="department"
          value={attributes.department}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Salary: </label>
        <input
          type="number"
          name="salary"
          value={attributes.salary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Experience: </label>
        <input
          type="number"
          name="experience"
          value={attributes.experience}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Evaluate</button>
    </form>
  );
}
