import { useEffect, useState } from "react";

let App = () => {
  let [count, setCount] = useState(0);
  let [process, setProcess] = useState("running");

  // useEffect => it is a hook which is used inside a functional component
  // it takes two argument => one: function, two: array [which is optional] based on the passed array or not
  // we have 3 cases :

  // Case 1: Passed a Function and an Empty array => use effect function will calls the passed function only once, that is after the first render. So it works like COMPONENT DID MOUNT
  // useEffect(() => {
  //   console.log("Case 1 use effect was called");
  // }, []);

  // Case 2: Passed a Function and no Array => use effect function will execute the passed function after first render and every re-render.
  // useEffect(() => {
  //   console.log("Case 2 use effect was called");
  // });

  // Case 3: Passed a Function and a state in Array => use effect function will execute the passed function after first render and after every state variable passed in array change.
  // useEffect(() => {
  //   let arr = process.split("i");
  //   console.log(arr);
  // }, [process]);

  
  // Clean-Up Function

  // Case 1: use effect function will execute after fisrt render and returns a function which is a clean up function
  //         it will be executed after every re-render
  // useEffect(() => {
  //   console.log("Case 2 use effect was called");

  //   return () => {
  //     console.log("Clean-up function was called");
  //   };
  // });

  // Case 2: in this case use effect will only execute once and return a clean up function, but we dont have other use effect which will execute and we know clean up works before execution of use effect

  // So in this case clean up function will execute when component is getting unmounted from the screen

  useEffect(() => {
    console.log("Case 2 use effect was called");

    return () => {
      console.log("Clean-up function was called");
    };
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

      {/* <p>{process}</p>
      <button
        onClick={() => {
          if (process == "running") {
            setProcess("stop");
          } else {
            setProcess("running");
          }
        }}
      >
        kill process
      </button> */}
    </div>
  );
};

export default App;
