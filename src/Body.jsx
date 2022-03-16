import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Building from "./page/Building";
import Home from "./page/Home";
import Mypage from "./page/Mypage";
import Tag from "./page/Tag";

export default function Body() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/building" element={<Building />}></Route>
          <Route path="/tag" element={<Tag />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          {/* <Route path="login" element={<Login />}></Route> */}
          {/* <Route path="signup" element={<Signup />}></Route> */}
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
