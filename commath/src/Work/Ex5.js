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
import { getInterpolation } from "./function.js";
import logo from '../logo.svg';
import '../App.css';
import { Collapse } from 'reactstrap';



function Ex5() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const [T, setT] = useState('5');
  const [x1, setx1] = useState('0');
  const [x2, setx2] = useState('8');
  const [x3, setx3] = useState('14');
  const [x4, setx4] = useState('20');
  const [x5, setx5] = useState('23');
  const [x6, setx6] = useState('30');
  const [y1, sety1] = useState('0');
  const [y2, sety2] = useState('50');
  const [y3, sety3] = useState('96');
  const [y4, sety4] = useState('110');
  const [y5, sety5] = useState('100');
  const [y6, sety6] = useState('86');

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      T: T,
      x: [x1, x2, x3, x4, x5, x6],
      y: [y1, y2, y3, y4, y5, y6]

    };
    getInterpolation(data).then((res) => {
      setresult(`ด้วยเวลา ${T} วินาที / ความเร็วโดยประมาณจะอยู่ที่ ${res} `)
    });
  };
  return (
    <div className="App-header">

      <div className="text-center" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ marginTop: "5px", marginRight: "20px", marginLeft: "20px" }}>
        </h1>
      </div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem'}}>Link Start</Button>
      <Collapse isOpen={isOpen}>
        <div className="text-center">
          <h1 style={{ marginTop: "20px" }}>Interpolation</h1>
        </div>

        <div className="text-center">
          <p>TestSystem :</p>
          <p>T = 5</p>
          <p>x = 0, 8, 14, 20, 23, 30 ]</p>
          <p>y = [ 0, 50, 96, 110, 100, 86 </p>
        </div>

        <div class="container" className="text center">
          <Row>

            <Col>
              <h3 style={{ marginTop: "20px", marginLeft: "20px" }}> T </h3>
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 60,
                }}
                value={T}
                onChange={(e) => setT(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              /> </Col>
          </Row>
          {/* .........................................................................         */}
          <Row>
            <Col>
              <h3 style={{ marginTop: "20px", marginLeft: "20px" }}> X </h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 60,
                }}
                value={x1}
                onChange={(e) => setx1(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              /></Col>
            <Col>
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 60,
                }}
                value={x2}
                onChange={(e) => setx2(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
            </Col>
            <Col>
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 60,
                }}
                value={x3}
                onChange={(e) => setx3(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              /></Col>
          </Row>
          <Row>
            <Col><Input
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                marginBottom: "20px",
                width: 60,
              }}
              value={x4}
              onChange={(e) => setx4(e.target.value)}
              type="text"
              name="bit2string"
              id="bit2string"
            /></Col>
            <Col><Input
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                marginBottom: "20px",
                width: 60,
              }}
              value={x5}
              onChange={(e) => setx5(e.target.value)}
              type="text"
              name="bit2string"
              id="bit2string"
            /></Col>
            <Col><Input
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                marginBottom: "20px",
                width: 60,
              }}
              value={x6}
              onChange={(e) => setx6(e.target.value)}
              type="text"
              name="bit2string"
              id="bit2string"
            />
            </Col>
          </Row>
          {/* .........................................................................  */}
          <Row>
            <Col>
              <h3 style={{ marginTop: "20px", marginLeft: "20px" }}> Y </h3>
            </Col>
          </Row>

          <Row >
            <Col>
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 60,
                }}
                value={y1}
                onChange={(e) => sety1(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              /></Col>
            <Col>
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 60,
                }}
                value={y2}
                onChange={(e) => sety2(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              /></Col>
            <Col>
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 60,
                }}
                value={y3}
                onChange={(e) => sety3(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              /></Col>
          </Row>
          <Row>
            <Col>
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 60,
                }}
                value={y4}
                onChange={(e) => sety4(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              /></Col>
            <Col><Input
              style={{
                marginLeft: "20px",
                marginTop: "20px",
                marginBottom: "20px",
                width: 60,
              }}
              value={y5}
              onChange={(e) => sety5(e.target.value)}
              type="text"
              name="bit2string"
              id="bit2string"
            /></Col>
            <Col>
              <Input
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 60,
                }}
                value={y6}
                onChange={(e) => sety6(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
            </Col>
          </Row>
        </div>
        <h3 style={{ marginBottom: "10px" }}>Answer : {result}</h3>
        <div>
          <Button onClick={generate} color="primary" style={{ marginRight: "100px" }} >
            <div style={{ width: 150, height: 25 }}>
              Commit
            </div>
          </Button>

          <Button onClick={back} color="secondary" style={{ marginLeft: "435px" }}>
            <div style={{ width: 180, height: 25 }}>
              <h5> Back to menu </h5>
            </div>
          </Button>
        </div>
      </Collapse>
    </div >

  );
}
export default Ex5;