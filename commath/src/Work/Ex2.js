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
import { getElimination } from "./function";
import logo from '../logo.svg';
import { Collapse } from 'reactstrap';
import '../App.css';


function Ex2() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();
    const [a00, seta00] = useState('6');
    const [a01, seta01] = useState('-4');
    const [a02, seta02] = useState('1');
    const [a10, seta10] = useState('-4');
    const [a11, seta11] = useState('6');
    const [a12, seta12] = useState('-4');
    const [a20, seta20] = useState('1');
    const [a21, seta21] = useState('-4');
    const [a22, seta22] = useState('6');

    const [b1, setb1] = useState('-14');
    const [b2, setb2] = useState('36');
    const [b3, setb3] = useState('6');

    const [x0, setx0] = useState();
    const [x1, setx1] = useState();
    const [x2, setx2] = useState();


    const back = () => {
        navigate("/");
    };

    const generate = () => {
        const data = {
            A: [[a00, a01, a02], [a10, a11, a12], [a20, a21, a22]],
            b: [b1, b2, b3]

        };
        getElimination(data).then((res) => {
            setx0(res[0])
            setx1(res[1])
            setx2(res[2])
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
                <div className="text-center">
                    <h1 style={{ marginTop: "20px" }}>Linear Equations</h1>
                </div>

                <div>
                    <div className="text-center">
                        <h3>TestSystem : </h3>
                        <p>A = [ 6 , -4 , 1 ]<br />
                           [ -4 , 6 , -4 ]<br />
                           [ 1 , -4 , 6 ]
                    </p>
                        <p>B = [-14 , 36 , 6 ]</p>

                    </div>

                    <div className="text-center">
                        <h3 style={{ marginTop: 50 }}>A</h3>
                    </div>
                    <Row>
                        <Col>
                            <Input
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={a00}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => seta00(e.target.value)}
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
                                value={a01}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => seta01(e.target.value)}
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
                                value={a02}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => seta02(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Input
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={a10}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => seta10(e.target.value)}
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
                                value={a11}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => seta11(e.target.value)}
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
                                value={a12}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => seta12(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>

                        <Col>
                            <Input
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={a20}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => seta20(e.target.value)}
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
                                value={a21}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => seta21(e.target.value)}
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
                                value={a22}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => seta22(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <div className="text-center">
                        <h3 style={{ marginTop: 50 }}>B</h3>
                    </div>
                    <Row>

                        <Col>
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={b1}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => setb1(e.target.value)}
                            /> </Col>
                        <Col>
                            <Input
                                style={{
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    width: 60,
                                }}
                                value={b2}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => setb2(e.target.value)}
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
                                value={b3}
                                type="text"
                                name="bit2string"
                                id="bit2string"
                                onChange={(e) => setb3(e.target.value)}
                            />
                        </Col>
                    </Row>


                </div>
                <div>
                    <h4 style={{ marginBottom: "10px" }}> x = {x0}</h4>
                    <h4 style={{ marginBottom: "10px" }}> y = {x1}</h4>
                    <h4 style={{ marginBottom: "10px" }}> z = {x2}</h4>
                </div>

                <div>
                    <Button onClick={generate} color="primary" style={{ marginLeft: "120px" }}>
                        Commit
                </Button>
                </div>
                <div >
                    <Button onClick={back} color="secondary" style={{ marginTop: "20px", marginLeft: "70px", marginEnd: "10px" }}>
                        <div style={{ width: 150, height: 25 }}>
                            <h5> Back to menu </h5>
                        </div>
                    </Button>
                </div>
            </Collapse>
        </div>
    );
}
export default Ex2;