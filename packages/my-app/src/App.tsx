import "./App.css";
import { defineCustomElements, EvilPhonenumberInput } from "react-library";

function App() {
  defineCustomElements();

  return (
    <>
      <EvilPhonenumberInput></EvilPhonenumberInput>
    </>
  );
}

export default App;
