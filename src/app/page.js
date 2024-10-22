'use client';
import RuleForm from '@/app/components/RuleForm';
import RuleCombiner from './components/RuleCombiner';
import RuleDashboard from './components/RuleDashboard';
import RuleEvaluator from './components/RuleEvaluator';
import styles from '@/app/page.module.css'

import { useState } from 'react';

export default function Home() {
  const [rules, setRules] = useState([]);

  // Function to handle rule creation
  const handleCreateRule = (rule) => {
    const ruleString = `${rule.attribute} ${rule.operator} ${rule.value} ${rule.logicalOperator} ${rule.nextAttribute} ${rule.nextOperator} ${rule.nextValue}`;
  
    console.log("Rule String:", ruleString);
  
    fetch('https://rule-engine-backend-production.up.railway.app/api/create-rule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rule: ruleString }), // Passing the rule as the required JSON format
    })
      .then((res) => {
        console.log("Status Code:", res.status); // Log the status code
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((newRule) => setRules([...rules, newRule]))
      .catch((err) => console.error('Error creating rule:', err));
  };
  
  
  

  const handleDeleteRule = (ruleId) => {
    fetch(`/api/rules/${ruleId}`, {
      method: 'DELETE',
    }).then(() => setRules(rules.filter((rule) => rule.id !== ruleId)));
  };


  const handleCombineRules = (selectedRules, logicalOperator) => {
    fetch('/api/combine-rules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedRules, logicalOperator }),
    })
      .then((res) => res.json())
      .then((combinedRule) => setRules([...rules, combinedRule]));
  };

 
  const handleEvaluateRule = (attributes) => {
    // Make the API request to evaluate the rule
    fetch('https://rule-engine-backend-production.up.railway.app/api/evaluate-rules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(attributes), // Send the attributes in JSON format
    })
      .then((res) => res.json())
      .then((evaluationResult) => {
        if (evaluationResult.evaluation) {
          // Show the message in an alert
          alert(`Evaluation Message: ${evaluationResult.message}`);
        } else {
          alert(`Evaluation Message: ${evaluationResult.message}`);
        }
      })
      .catch((error) => {
        console.error('Error evaluating rule:', error);
        alert("Error occurred while evaluating the rule.");
      });
  };
  
  

  return (
    <div className={styles.gridcontainer}>
      <div className={styles.griditem}>
        <h2>Rule Creation</h2>
        <RuleForm onSubmit={handleCreateRule} />
      </div>
      <div className={styles.griditem}>
        <h2>Rule Management</h2>
        <RuleDashboard onDelete={handleDeleteRule} onEdit={() => {}} />
      </div>
      <div className={styles.griditem}>
        <h2>Combine Rules</h2>
        <RuleCombiner rules={rules} onCombine={handleCombineRules} />
      </div>
      <div className={styles.griditem}>
        <h2>Evaluate Rule</h2>
        <RuleEvaluator onEvaluate={handleEvaluateRule} />
      </div>
    </div>
  );
}