import { useEffect, useState } from "react";

let App = () => {
  let [count, setCount] = useState(0);

  // useEffect => it is a hook which is used inside a functional component
  // it takes two argument => one: function, two: array [which is optional] based on the passed array or not
  // we have 3 cases :

  // Case 1: Passed a Function and an Empty array => use effect function will calls the passed function only once, after the first render. So it works like COMPONENT DID MOUNT
  useEffect(() => {
    console.log("Case 1 use effect was called");
  }, []);

  // Case 2: Passed a Function => use effect function will execute the passed function after every render, that is after first render and every re-render. So it works like COMPONENT DID MOUNT
  useEffect(() => {
    console.log("Case 2 use effect was called");
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
