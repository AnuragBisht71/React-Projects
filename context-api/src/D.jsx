import { useContext } from "react";
// Step 5: Import the context you exported in the component where you want to get the state
import { countContext } from "./A";

let D = () => {
  let value = useContext(countContext);

  return (
    // Step 6: Inside functional component call useContext and give it the context from which you want the value
    <div className="d-div">
      <button
        onClick={() => {
          value.setCount(value.count + 1);
        }}
      >
        +
      </button>
      <p>{value.count}</p>
    </div>
  );
};

export default D;
