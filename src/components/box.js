import React from "react";

function Box(props) {
    return (
        <div className=" Box col-3 border-info border border-5 rounded-3 bg-info bg-opacity-10 p-5 d-flex justify-content-center align-items-center " onClick={() => { return (props.onClick(props.id)); }}>{props.value}
        </div>
    )
}

export default Box;