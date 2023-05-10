import "./App.css";
import { MyComponent } from "react-library";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>ez</h1>
      <MyComponent>
        tartalom...<slot name={"header"}>bigyo</slot>
      </MyComponent>
      <p>?</p>
    </>
  );
}

export default App;
