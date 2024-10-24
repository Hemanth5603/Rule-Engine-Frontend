<h2>Rule Engine Frontend</h2>
This is the frontend application for the Rule Engine system, built using Next.js. It allows users to create, manage, and evaluate rules dynamically. The application integrates with a backend API for rule evaluation and visualization.
<br>

<h5>Live Link</h5> https://rule-engine-frontend-rust.vercel.app/

<h5>Backend Golang server codebase link</h5> https://github.com/Hemanth5603/Rule-Engine-Backend

<h3>Here is the Glimpse of the application</h3>
<br/>

<img src="https://github.com/user-attachments/assets/396385e7-6d41-4d8d-82e9-4eb8cc8dfb43" alt="Screenshot of the App" style="width:80%;">

<h3>System Architecture</h3>
<br/>
<img src="https://github.com/user-attachments/assets/bd888e4b-4b66-44db-ab48-7e978ac44b4c" alt="Screenshot of the App" style="width:80%;">


<h3>Here is how the AST nodes are stored in the database individually with relationships</h3>
<br/>

<img src="https://github.com/user-attachments/assets/d7665a38-f5aa-4667-aa22-35063062ee89" alt="Screenshot of the App" style="width: 80%;">



<br>
<h3>Features</h3>
 - Rule Creation: Allows users to define new rules with various attributes. <br> <br>
 - Rule Management: Users can view the existing rules. <br><br>
 - Rule Evaluation: Users can input attributes (like age, department, salary, experience) and evaluate rules against those attributes using the backend API.<br><br>
 - Responsive Design: The UI is responsive and works well on both desktop and mobile device. <br>


<h3> Getting Started</h3>
Follow the steps below to get the project up and running locally.

<h4>Prerequisites</h4>

Node.js (version 14.x or above) <br>
npm (Node package manager) <br>
<h4>Installation</h4>
1. Clone the repository:

```bash
git clone https://github.com/Hemanth5603/Rule-Engine-Frontend.git
```

2. Navigate to the project directory:

```bash
cd rule-engine-frontend
```

3. Install the dependencies

```bash
npm install
```

<h4>Running the Application</h4>

```bash
npm run dev
```

<h3>Key Components</h3> <be>
 - RuleCreator: A form where users can create a rule by giving necessary attributes in the input. <br><br>
 - RuleEvaluator: A form where users input attributes which are age, salary, department, experience to evaluate rules. 
<br> <br>
 - RuleDashboard: Displays the list of rules, and allows users to delete rules.<br><br>
 - RuleCombiner: Allows users to combine multiple rules using logical operators (AND/OR).<br><br>



