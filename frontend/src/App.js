import "./index.css";
import * as React from 'react'
import { useRoutes, Route, Link } from "react-router-dom"
import Home from './views/Home'
import SinglePlayer from "./views/SinglePlayer";

const App = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/single", element: <SinglePlayer /> }
  ])
  return element;
};
export default App;
