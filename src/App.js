import React from "react";
import Nav from "./componant/Nav";
import "./App.css";
import Content from "./componant/Content";
import Form from "./componant/Form";


const App = () => {
  return (
    <div className="wrapper">
      <Nav />
      <Content />
      <Form />
    </div>
  );
};

export default App;
