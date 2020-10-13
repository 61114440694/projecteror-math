import React from 'react';
import './App.css';
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
const router = useRoutes(routes);
  return <div>{router}</div>;
};

export default App;