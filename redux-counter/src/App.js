import { useDispatch, useSelector } from "react-redux";
import { incrementCreator, decrementCreator } from "./redux/action";

let App = () => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(incrementCreator());
        }}
      >
        +
      </button>
      <p>{state}</p>
      <button
        onClick={() => {
          dispatch(decrementCreator());
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
