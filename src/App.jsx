import "./App.css";

import { Button } from "reactstrap";
import React, { useState } from "react";

import Refactored from "./modules/Refactored";
import Unrefactored from "./modules/Unrefactored";

function App() {
  const [isRefactored, setIsRefactored] = useState(false);
  function handleToggle() {
    setIsRefactored(!isRefactored);
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-1">Welcome to Our App</h1>
        <p className="lead">A modular and reusable CRUD application</p>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <h2 className="display-6" style={{ fontSize: "1.5rem" }}>
          {isRefactored ? "Refactored" : "Unrefactored"}
        </h2>
        <Button color="primary" onClick={handleToggle}>
          Toggle
        </Button>
      </div>

      {!isRefactored ? <Unrefactored /> : <Refactored />}
    </div>
  );
}

export default App;
