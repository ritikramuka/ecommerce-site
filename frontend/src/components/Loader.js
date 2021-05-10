import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
    return (
        <Spinner
            animation="border"
            style={{
                margin: "auto",
                display: "block",
                height: "60px",
                width: "60px",
            }}
            variant="dark"
        >
            <span className="sr-only">Loading... </span>
        </Spinner>
    );
}

export default Loader;
