import { useState } from "react";
import Welcome from "./welcome";
import "./App.css";

function App() {
  const [name, setName] = useState<string>("Developer");

  return (
    <div className="interactive-demo">
      <h3>Props Example</h3>
      <p>This demonstrates how data is passed to a child component using props.</p>

      <Welcome name={name} />

      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default App;
