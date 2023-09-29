// src/Sidebar.tsx

import React, { useState } from "react";
import FormA from "./FormA"; // Import FormA
import FormB from "./FormB"; // Import FormB

// interface SidebarProps {
//   activeForm: string;
//   onFormSwitch: (form: string) => void;
// }

const Sidebar = ({ activeForm, onFormSwitch, expanded, onToggleSidebar }) => {
  return (
    <div className={`sidebar ${expanded ? "expanded" : ""}`}>
      <button className="toggle-button" onClick={onToggleSidebar}>
        {expanded ? "<" : ">"}
      </button>
      <div className={`sidebar ${expanded ? "expanded" : ""}`}>
        <div className="buttons">
          <button onClick={() => onFormSwitch("A")} className={activeForm === "A" ? "active" : ""}>
            Button A
          </button>
          <button onClick={() => onFormSwitch("B")} className={activeForm === "B" ? "active" : ""}>
            Button B
          </button>
        </div>
        <form className="form">
          {activeForm === "A" && <FormA />} {/* Render FormA */}
          {activeForm === "B" && <FormB />} {/* Render FormB */}
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
