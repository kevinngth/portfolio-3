import React from "react";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import './MySide.scss';

function MySide(props) {
    return (
        <ListGroup
            className="flex-md-column justify-content-around h-100 border-left aside"
            horizontal
        >
            <ListGroup.Item onClick={() => props.setPage("About")} className="border-0 side-image px-3">
                <Image
                    className="w-100"
                    src="./silouette.jpg"
                    roundedCircle
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center side-text">
                    <h5 className="text-light">About</h5>
                </div>
            </ListGroup.Item>
            <ListGroup.Item onClick={() => props.setPage("Stack")} className="border-0 side-image px-3">
                <Image
                    className="w-100"
                    src="./wes-hicks-jaRUkG_4xDw-unsplash.jpg"
                    roundedCircle
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center side-text">
                    <h5 className="text-light">Stack</h5>
                </div>
            </ListGroup.Item>
            <ListGroup.Item onClick={() => props.setPage("Portfolio")} className="border-0 side-image px-3">
                <Image
                    className="w-100"
                    src="./clem-onojeghuo-pTeZKi29EYE-unsplash.jpg"
                    roundedCircle
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center side-text">
                    <h5 className="text-light">Portfolio</h5>
                </div>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default MySide;