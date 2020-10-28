import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getDifferentiation } from "./function";
import logo from '../logo.svg';
import '../App.css';
import { Collapse } from 'reactstrap';

function Ex4() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const [h, seth] = useState('0.32');
  const [p, setp] = useState('6');

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      h: h,
      p: p

    };
    getDifferentiation(data).then((res) => {
      setresult(res)
    });
  };
  return (
    <div className="App-header">
      <div className="text-center" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ marginTop: "5px", marginRight: "20px", marginLeft: "20px" }}>
        </h1>
      </div>

      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Link Start</Button>
      <Collapse isOpen={isOpen}>
        <div className="text-center">
          <h1 style={{ marginTop: "20px", marginRight: "20px" }}>
            Differentiation
          </h1>
        </div>


        <div className="text-center">
          <h3 style={{ marginRight: "10px" }}>TestSystem : h = 0.32  , p = 6 </h3>
        </div>


        <div>
          <h3 style={{ marginTop: "20px", marginLeft: "220px" }}>h : </h3>
          <Input
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "220px",
              width: 300,
            }}
            value={h}
            onChange={(e) => seth(e.target.value)}
            type="text"
            name="bit2string"
            id="bit2string"
          />
          <h3 style={{ marginTop: "20px", marginLeft: "220px" }}>p : </h3>
          <Input
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "220px",
              width: 300,
            }}
            value={p}
            onChange={(e) => setp(e.target.value)}
            type="text"
            name="bit2string"
            id="bit2string"
          />

        </div>

        <div>

          <h2 style={{ marginLeft: "180px", marginTop: "20px" }}> Answer : {result}</h2>
          <div style={{marginTop:"15px"}}>
            <Button onClick={generate} color="primary">
              <div style={{ width: 150, height: 25 }}>
                Commit
          </div>
            </Button>

            <Button onClick={back} color="secondary" style={{ marginLeft: "410px" }}>
              <div style={{ width: 180, height: 25 }}>
                <h5> Back to menu </h5>
              </div>
            </Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Ex4;