import { createContext, useState } from "react";
import B from "./B";

// Step 1: Create a context
let countContext = createContext();

let A = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      {/* Step 2: Add a provider as child to the component which has the data */}
      {/* Step 3: Give the provider the value you want to pass on to the indirect low level child */}
      <countContext.Provider value={{ count, setCount }}>
        <B />
      </countContext.Provider>
    </div>
  );
};

export default A;
// Step 4: Export the context
export { countContext };
