import React from "react";

function Show({ budget }) {
    return (
        <div>
            <ul>
                <li> {budget.name} </li>
                <li> {budget.start_date} </li>
                <li> {budget.end_date} </li>
            </ul>
        </div>
    );
}

export default Show;
