import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>Detail - Messages -</div>
    </>
  );
}

export default App;
