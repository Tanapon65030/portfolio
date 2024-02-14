
import React from "react";

import { Button, ConfigProvider } from "antd";

import { Anchor } from "./components";
import { ANCHOR_ITEMS } from "./utils/anchor-items";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";


import "./App.css";

const App = () => {
  return (
    <ConfigProvider
            theme={{
                components: {
                    Anchor: { colorSplit: "transparent" },
                },
            }}
        >
            <Home />
            <Anchor items={ANCHOR_ITEMS}>
                 
                <AboutMe />
                <Education />
                <Projects />
                <Experiences />
                <Skills />
                <Contact />
                <br/><br/>
            </Anchor>
        </ConfigProvider>
  );
};

export default App;
