import React from "react";
import "./App.css";
import RecordsList from "./components/RecordsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Database Records</h1>
      </header>
      <main>
        <RecordsList />
      </main>
      <footer>
        <p>Created by {new Date().getFullYear()} © a2ys, koshambiB</p>
      </footer>
    </div>
  );
}

export default App;
