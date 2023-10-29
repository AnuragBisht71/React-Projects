import { useDispatch, useSelector } from "react-redux";
import {
  incrementCreator,
  decrementCreator,
  loginCreator,
  logoutCreator,
} from "./redux/action";

let App = () => {
  let { count, logged } = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(loginCreator());
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logoutCreator());
        }}
      >
        logout
      </button>

      <br></br>
      <br></br>

      {logged ? (
        <>
          <button
            onClick={() => {
              dispatch(incrementCreator(1));
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              dispatch(incrementCreator(10));
            }}
          >
            +10
          </button>
          <p>{count}</p>
          <button
            onClick={() => {
              dispatch(decrementCreator());
            }}
          >
            -
          </button>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
