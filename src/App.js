// src/App.tsx

import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import MainArea from "./MainArea";

function App() {
  const [activeForm, setActiveForm] = useState("A");

  const handleFormSwitch = (form) => {
    setActiveForm(form);
  };

  const [expanded, setExpanded] = useState(true);

  const handleToggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="App">
      <div className={`container ${expanded ? "expanded" : ""}`}>
        <Sidebar
          activeForm={activeForm}
          onFormSwitch={handleFormSwitch}
          expanded={expanded}
          onToggleSidebar={handleToggleSidebar}
        />
        <MainArea activeForm={activeForm} />
      </div>
    </div>
  );
}

export default App;
