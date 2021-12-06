import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App/App";
import Form from "./Form";


export default function Home() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Form} />
        <Route exact path="/app" component={App} />
      </Router>
    </>
  )
}