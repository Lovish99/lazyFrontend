import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserLazyLoading } from "./components/browserLazyLoading";
import styled from "styled-components";
import { ReactLazyLoading } from "./components/reactLazyLoading";
import { BlurHashLazyLoading } from "./components/blurhashLazyLoading";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blurhashlazyloading"
            element={<BlurHashLazyLoading />}
          />
          <Route path="/reactlazyloading" element={<ReactLazyLoading />} />
          <Route path="/browserlazyloading" element={<BrowserLazyLoading />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
