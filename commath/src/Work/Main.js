import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/" + page);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "72px", fontWeight: "bold" }}> lesson All of Commath </p>
        <p style={{ fontSize: "32px" }}>

          บทที่ 1 : <Button onClick={() => { nextPage("Ex1") }} >
            click
          </Button><br />

         บทที่ 2 : <Button onClick={() => { nextPage("Ex2") }}>
            click
          </Button><br />

         บทที่ 3 : <Button onClick={() => { nextPage("Ex3") }}>
            click
          </Button><br />

         บทที่ 4 : <Button onClick={() => { nextPage("Ex4") }}>
            click
          </Button><br />

         บทที่ 5 : <Button onClick={() => { nextPage("Ex5") }}>
            click
          </Button><br />

         บทที่ 6 : <Button onClick={() => { nextPage("Ex6") }}>
            click
          </Button><br />
        </p>
        <a style={{ fontSize: "42px", fontWeight: "bold" }}
          className="App-link"
          href="https://wichit2s.gitlab.io/commath/01-Basic-Computing/index.html"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <h1>____________________________________________________________</h1><br />

      </header>
    </div>
  );
}


export default Main;


