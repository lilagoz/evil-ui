import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { EvilPhonenumberInput } from "react-library/dist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>ez</h1>
      <EvilPhonenumberInput></EvilPhonenumberInput>
      <p>?</p>
    </>
  );
}

export default App;
