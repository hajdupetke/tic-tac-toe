import "./index.css";
import * as React from "react";
import { useRoutes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Singleplayer from "./views/Singleplayer";
import Multiplayer from "./views/Multiplayer";
import Lobby from "./views/Lobby";

const App = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/single", element: <Singleplayer /> },
        { path: "/multi", element: <Lobby /> },
        { path: "/multi/:id", element: <Multiplayer /> },
    ]);
    return element;
};
export default App;
