import styled from "@emotion/styled";
import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import Menu from "./pages/menu";
import DemoOne from "./pages/demo-one";

const DemoPage: FC = () => {
  return (
    <div className="demo">
      <DemoTitle>这里是DEMO</DemoTitle>
      <Routes>
        <Route path="menu" element={<Menu />} />
        <Route path="one" element={<DemoOne />} />
        <Navigate replace to="menu" />
      </Routes>
    </div>
  );
};

export default DemoPage;

const DemoTitle = styled.div`
  font-size: 20px;
  line-height: 1.15;
  color: #333;
`;
