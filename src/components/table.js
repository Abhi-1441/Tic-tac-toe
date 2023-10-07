import { Message } from './Message';
import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import Box from "./box";

function Table(props) {

    const [tags, setTags] = useState([]);
    const [turnCount, setTurnCount] = useState(0);
    const [crossTurn, setCrossturn] = useState(true);
    const [alert, setAlert] = useState(false);
    const [Winner, setWinner] = useState();

    function checkWinner() {
        for (let i = 1; i <= 9; i = i + 3) {
            if (tags[i] === tags[i + 1] && tags[i] === tags[i + 2] && tags[i] != null) {
                if (tags[i] === "❌") {
                    console.log("cross wins");
                    return "Cross";
                }
                else return "Circle";
            }
        }
        for (let i = 1; i <= 3; i++) {
            if (tags[i] === tags[i + 3] && tags[i] === tags[i + 6] && tags[i] != null) {
                if (tags[i] === "❌") {
                    console.log("cross wins");
                    return "Cross";
                }
                else return "Circle";
            }
        }
        if (tags[1] === tags[5] && tags[1] === tags[9] && tags[1] != null) {
            if (tags[1] === "❌") {
                console.log("cross wins");
                return "Cross";
            }
            else return "Circle";
        }
        if (tags[3] === tags[5] && tags[3] === tags[7] && tags[3] != null) {
            if (tags[3] === "❌") {
                console.log("cross wins");
                return "Cross";
            }
            else return "Circle";
        }
    }
    function updateTags(id) {
        if (tags[id]) {
            setAlert(true);
        }
        else {
            setAlert(false);
            setTags(preTags => {
                var tempTags = preTags;
                tempTags[id] = crossTurn ? "❌" : "⭕";
                setWinner(checkWinner());
                return tempTags;
            });
            setTurnCount(prevCount => {
                return prevCount + 1;
            });
            setCrossturn(preValue => !preValue);
            console.log(tags);
            console.log(id);
        }
    }
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            {
                !Winner
                    ? <RefreshButton refreshPage={refreshPage} />
                    : null
            }
            <Message Winner={Winner} crossTurn={crossTurn} turnCount={turnCount} />

            {
                !Winner
                    ? <><div className="Table text-center d-flex justify-content-center py-5 pb-5">
                        <div className=" border-info border border-5 rounded-3 p-4">
                            <div className="row  ">
                                <Box key={1} id={1} value={tags[1]} onClick={updateTags} />
                                <Box key={2} id={2} value={tags[2]} onClick={updateTags} />
                                <Box key={3} id={3} value={tags[3]} onClick={updateTags} />
                            </div>
                            <div className="row ">
                                <Box key={4} id={4} value={tags[4]} onClick={updateTags} />
                                <Box key={5} id={5} value={tags[5]} onClick={updateTags} />
                                <Box key={6} id={6} value={tags[6]} onClick={updateTags} />
                            </div>
                            <div className="row ">
                                <Box key={7} id={7} value={tags[7]} onClick={updateTags} />
                                <Box key={8} id={8} value={tags[8]} onClick={updateTags} />
                                <Box key={9} id={9} value={tags[9]} onClick={updateTags} />
                            </div>
                        </div>
                    </div>
                        <div className="d-flex justify-content-center">
                            {alert ? <Alert variant="filled" severity="warning" >
                                " Box is already filled !! "
                            </Alert > : null}
                        </div></>
                    : <RefreshButton refreshPage={refreshPage} />
            }

        </div>
    )
}

export default Table;


function RefreshButton({ refreshPage }) {
    return (<div className="d-flex justify-content-center pt-5 fs-3">
        <button className="rounded-3 p-2" onClick={refreshPage}> Restart 🔄️</button>
    </div>);
}
