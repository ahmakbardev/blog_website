import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from './pages/home/Home'
import { RouterProvider } from "react-router-dom";
import Router from "./pages/router/Router";

function App() {
  return <RouterProvider router={Router} />
}

export default App;
