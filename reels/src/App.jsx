import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import AuthProvider from "./AuthProvider";
import { firestore } from "./firebase";
import { useEffect } from "react";

let App = () => {
  // useEffect(() => {
  // ADD
  // firestore.collection("users").add({ body: "this is some value" });

  // GET COMPLETE COLLECTION DATA
  // async function f() {
  //   let querySnapshot = await firestore.collection("users").get();

  //   for (let i = 0; i < querySnapshot.docs.length; i++) {
  //     console.log(querySnapshot.docs[i].data());
  //   }
  // }
  // f();

  // GET SINGLE DOCUMENT OR OBJECT
  //   let f = async () => {
  //     let docRef = firestore.collection("users").doc("ZwapWu167qvN7ygUEbsS");
  //     let documentSnapshot = await docRef.get();
  //     console.log(documentSnapshot.data());
  //     console.log(documentSnapshot.id);
  //   }
  //   f();
  // }, []);

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
