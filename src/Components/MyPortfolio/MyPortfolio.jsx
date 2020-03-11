import React from "react";
import './MyPortfolio.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PORTFOLIO from './portfolio';
import Image from 'react-bootstrap/Image'

function MyPortfolio() {
    return (
        <Row>
            <Col>
                <Row classNames="card-top"><Image src={PORTFOLIO[0].img_src} fluid /></Row>
                <Row classNames="card-mid"><Image src={PORTFOLIO[1].img_src} fluid /></Row>
                <Row classNames="card-bottom"><Image src={PORTFOLIO[2].img_src} fluid /></Row>
            </Col>
        </Row>
    )}

export default MyPortfolio;