import React, { useState } from "react";
import "./App.css";
import MyNav from "./Components/MyNav/MyNav";
import MyMain from "./Components/MyMain/MyMain";
import MySide from "./Components/MySide/MySide";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
    const [page, setPage] = useState("About");
    return (
        <Container fluid={true} className="overflow-hidden">
            <Row>
                <Col md={10}>
                    <Row>
                        <Col className="position-absolute nav-styles">
                            <MyNav />
                            <hr />
                        </Col>
                    </Row>
                    <Row className="vh-100">
                        <Col className="d-flex justify-content-center align-items-center text-monospace text-uppercase">
                            <MyMain page={page}/>
                        </Col>
                    </Row>
                </Col>
                <Col className="p-0" md={2}>
                    <MySide setPage={page => setPage(page)} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;