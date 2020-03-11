import React from "react";
import MyAbout from "../MyAbout/MyAbout.jsx";
import MyStack from "../MyStack/MyStack.jsx";
import MyPortfolio from "../MyPortfolio/MyPortfolio.jsx";

function MyMain(props) {
    switch (props.page) {
        case "About":
            return <MyAbout />;
        case "Stack":
            return <MyStack />;
        case "Portfolio":
            return <MyPortfolio />;
        default:
            return <MyAbout/>;
    }
}

export default MyMain;
