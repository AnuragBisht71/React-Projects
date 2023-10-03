import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import AuthProvider from "./AuthProvider";
import { firestore } from "./firebase";
import { useEffect } from "react";

let App = () => {
  useEffect(() => {
    // ADD
    // firestore.collection("users").add({ body: "this is some value" });

    // GET COMPLETE COLLECTION DATA
    async function f() {
      let querySnapshot = await firestore.collection("users").get();

      for (let i = 0; i < querySnapshot.docs.length; i++) {
        console.log(querySnapshot.docs[i].data());
      }
    }
    f();
  }, []);

  return (
    <>
      <h1 className="m-4">App</h1>
      {/* <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </AuthProvider> */}
    </>
  );
};

export default App;
