import { useEffect, useState } from "react";

let App = () => {
  let [count, setCount] = useState(0);

  // useEffect => it is a hook which is used inside a functional component
  // it takes two argument => one: function, two: array [which is optional] based on the passed array or not
  // we have 3 cases :

  // 1. Passed a Function and an Empty array => use effect function will calls the passed function only once, after the first render. So it works like COMPONENT DID MOUNT
  useEffect(() => {
    console.log("use effect was called");
  }, []);

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
