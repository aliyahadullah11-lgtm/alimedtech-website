import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Inter, sans-serif" }}>
      <h1>AliMedTech Solutions 🚀</h1>
      <p>Website live ho chuki hai</p>
      <p>GitHub Pages successfully working</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
