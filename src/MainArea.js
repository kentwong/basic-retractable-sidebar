// src/MainArea.tsx

import React from "react";
import ComponentA from "./ComponentA"; // Import ComponentA
import ComponentB from "./ComponentB"; // Import ComponentB

const MainArea = ({ activeForm, expanded }) => {
  return (
    <div className={`main-area ${expanded ? "expanded" : ""}`}>
      {activeForm === "A" && <ComponentA />}
      {activeForm === "B" && <ComponentB />}
    </div>
  );
};

export default MainArea;
