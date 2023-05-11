import "./App.css";
import {
  defineCustomElements,
  EvilPhonenumber,
  SizeableWindow,
} from "react-library";
import { Field, Form, Formik } from "formik";

function App() {
  defineCustomElements();

  /*
  return (
    <div>
      <EvilPhonenumber
        onChange={(ev) => {
          console.log("bigyula", ev);
        }}
      ></EvilPhonenumber>
      <label>
        <span>bina:</span>
        <input
          type={"text"}
          onChange={(ev) => {
            console.log("native input", ev);
          }}
        />
      </label>
    </div>
  );
*/

  return (
    <SizeableWindow windowTitle={"Evil form 🐐🔥"}>
      <Formik
        initialValues={{
          phoneNumber: "",
        }}
        onSubmit={(e) => {
          console.log("onSubmit", e);
        }}
      >
        {({ handleChange }) => (
          <Form>
            <div className={"form-field"}>
              <Field
                id={"phoneNumber"}
                name={"phoneNumber"}
                onChange={handleChange}
                component={EvilPhonenumber}
              ></Field>
            </div>
            <div className={"button-form-field"}>
              <button type={"submit"} className={"button"}>
                Do something.
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </SizeableWindow>
  );
}

export default App;
