import React from "react";
export function Message({ Winner, crossTurn , turnCount}) {
    return <div className="text-center pt-5 ">
        <h1>{Winner ? Winner + " Wins 🙌" : turnCount==9?"It's a tie 😁" :crossTurn ? "Cross's Turn" : "Circle's Turn"}</h1>
    </div>;
}
