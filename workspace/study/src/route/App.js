import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Intro from "./Intro";
import Job from "./Job";
import { RouteProvider } from "./contexts/RouteContext";
import Header from "./Header";

const App = () => {
  return (
    <RouteProvider>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/intro" element={<Intro />} />
          {/* 중첩 라우트 */}
          {/* 부모 경로 안에 여러 자식 경로가 있을 때 사용한다. */}
          <Route path="/job" element={<Job />}>
            <Route path=":title" element={<Job />} />
          </Route>
        </Route>
      </Routes>
    </RouteProvider>
  );
};

export default App;
