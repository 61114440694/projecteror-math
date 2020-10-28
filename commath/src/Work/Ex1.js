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
import { getB2s } from "./function";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';
import { Collapse } from 'reactstrap';

function Ex1() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate();
    const [bit2string, setBit2string] = useState('010000100111001');
    const [result, setResult] = useState("");
    const generate = () => {
        getB2s(bit2string).then((res) => {
            setResult(res);
        });
    };
    const back = () => {
        navigate("/");
    };
    return (

        <div className="App-header" >

            <div class="body">

                <div className="text-center" >
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 style={{ marginTop: "5px", marginRight: "20px", marginLeft: "20px" }}>
                    </h1>
                </div>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', marginLeft: "140px" }}>Link Start</Button>
                <Collapse isOpen={isOpen}>
                    <div>

                        <h2 style={{ marginLeft: "60px" }}> Basic Computing </h2>
                        <p style={{ marginLeft: "40px" }}>TestSystem : 010000100111001</p>
                        <div>
                            <p style={{ marginLeft: "10px" }}>input : </p>
                            <div style={{ marginLeft: "10px" }}>
                                <Input
                                    value={bit2string}
                                    type="text"
                                    name="bit2string"
                                    id="bit2string"
                                    onChange={(e) => setBit2string(e.target.value)}

                                />
                            </div>
                        </div>
                        <div style={{ marginLeft: "10px", marginTop: "10px" }}><p> Answer : {result} </p></div>
                    </div>
                    <div  >
                        <Row>
                            <Col><Button onClick={generate} color="primary">
                                Commit
                                    </Button></Col>
                            <Col><Button onClick={back} color="secondary" style={{ marginLeft: "80px" }}>
                                <div style={{ width: 150, height: 25 }}>
                                    <h5>Back to menu</h5>
                                </div>
                            </Button></Col>
                        </Row>



                    </div>
                </Collapse>


            </div>

        </div >
    );
}

export default Ex1; 