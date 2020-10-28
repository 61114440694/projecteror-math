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
import { getRootFinding } from "./function";
import logo from '../logo.svg';
import '../App.css';
import { Collapse } from 'reactstrap';


function Ex6() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();
    const [a, seta] = useState('0');
    const [b, setb] = useState('1');
    const [dx, setdx] = useState('0.0001');
    const [result, setresult] = useState();

    const back = () => {
        navigate("/");
    };


    const generate = () => {
        const data = {
            a: a,
            b: b,
            dx: dx
        };
        getRootFinding(data).then((res) => {
            setresult(res);
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
                <div>
                    <div className="text-center">
                        <h1 style={{ marginTop: "20px", marginRight: "20px" }}>
                            Root-finding
                        </h1>
                    </div>
                    <div className="text-center">
                        <p>TestSystem :</p>
                        <p>a = 0 , b = 1 , dx = 0.0001</p>
                    </div>

                    <div>
                        <Row>
                            <Col>
                                <h3 style={{ marginTop: "20px", marginRight: "20px" }}>a : </h3>
                                <Input
                                    style={{
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                        width: 100,
                                    }}
                                    value={a}
                                    onChange={(e) => seta(e.target.value)}
                                    type="text"
                                    name="bit2string"
                                    id="bit2string"
                                />
                            </Col>

                            <Col><h3 style={{ marginTop: "20px", marginRight: "20px" }}>b : </h3>
                                <Input
                                    style={{
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                        width: 100,
                                    }}
                                    value={b}
                                    onChange={(e) => setb(e.target.value)}
                                    type="text"
                                    name="bit2string"
                                    id="bit2string"
                                /></Col>
                            <Col>
                                <h3 style={{ marginTop: "20px", marginRight: "20px" }}>dx : </h3>
                                <Input
                                    style={{
                                        marginTop: "20px",
                                        marginBottom: "20px",
                                        width: 100,
                                    }}
                                    value={dx}
                                    onChange={(e) => setdx(e.target.value)}
                                    type="text"
                                    name="bit2string"
                                    id="bit2string"
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
                <h4 style={{ marginBottom: "10px" }}>Answer : {result}</h4>
                <div style={{ marginTop: "15px" }}>

                    <div style={{ marginLeft: "260px" }}>
                        <Button onClick={generate} color="primary" >
                            Commit
                                </Button>
                    </div>


                    <div style={{ marginTop: "15px", marginLeft: "200px" }}>
                        <Button onClick={back} color="secondary" >
                            <div style={{ width: 180, height: 25 }}>
                                <h5>Back to menu</h5>
                            </div>
                        </Button>
                    </div>

                </div>
            </Collapse>
        </div>
    );
}
export default Ex6;