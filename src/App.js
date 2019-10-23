import React, { Component } from "react";
import api from "./services/api";

import Routes from "./router";

import "./styles.css";

import Header from "./components/Header";
import Main from "./pages/main/index";

const App = () => (
    <div className="App">
        <Header />
        <Routes />
    </div>
);

export default App;
