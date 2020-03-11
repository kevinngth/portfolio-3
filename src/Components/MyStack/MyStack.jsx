import React from "react";
import "./MyStack.scss";
import STACK from './stack';

function MyStack() {
    const mapStack = STACK.map( (array, i) => {
        return <div key={i}>{array.map( (string, j) => {
            return ( string === "-" ? <span className="neomorphism" key={j} style={{visibility: "hidden"}}>{string}</span> : <span className="neomorphism" key={j}>{string}</span>)
        })}</div>
    });
    return <div style={{perspective: "800px", minWidth: "350px"}}><div className="neomorphic-container">{mapStack}</div></div>;
}

export default MyStack;