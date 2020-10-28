import React, { useState } from "react";
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
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getIntegration } from "./function";
import logo from '../logo.svg';
import '../App.css';
import { Collapse } from 'reactstrap';


function Ex3() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const [result, setresult] = useState();
  const [a, seta] = useState('2');
  const [b, setb] = useState('3');

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      a: a,
      b: b,
    };
    getIntegration(data).then((res) => {
      setresult(res);
    });
  };
  return (
    <div className="App-header" >
      <div className="text-center" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ marginTop: "5px", marginRight: "20px", marginLeft: "20px" }}>
        </h1>
      </div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Link Start</Button>
      <Collapse isOpen={isOpen}>
        <div>
          <div className="text-center">
            <h1>
              Integration
            </h1>
          </div>
          <div className="text-center">
            <h4>TestSystem :</h4>
            <p>A = 2 , B = 3</p>
          </div>

          <div>
            <h3 style={{ marginTop: "20px", marginLeft: "50px" }}>A </h3>
            <Input
              style={{
                marginLeft: "50px",
                marginTop: "20px",
                marginBottom: "20px",
                width: 250,
              }}
              value={a}
              onChange={(e) => seta(e.target.value)}
              type="text"
              name="bit2string"
              id="bit2string"
            />
            <h3 style={{ marginTop: "20px", marginLeft: "50px" }}>B </h3>
            <Input
              style={{
                marginLeft: "50px",
                marginTop: "20px",
                marginBottom: "20px",
                width: 250,
              }}
              value={b}
              onChange={(e) => setb(e.target.value)}
              type="text"
              name="bit2string"
              id="bit2string"
            />

            <h3 style={{ marginLeft: "70px" }}>Answer : {result}</h3>

            <div style={{marginTop:"15px"}}>
            <Button onClick={generate} color="primary" style={{ marginLeft: "40px" }}>
              <div >
                Commit
              </div>
            </Button>

            <Button style={{ marginLeft: "30px" }} onClick={back} color="secondary" >
              <div style={{ width: 150, height: 25 }}>
                <h5> Back to menu </h5>
              </div>
            </Button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
export default Ex3;