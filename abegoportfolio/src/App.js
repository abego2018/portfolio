import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
