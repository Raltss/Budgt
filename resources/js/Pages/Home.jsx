import React from "react";
import { Link } from "@inertiajs/react";

function Home({ budgets }) {
    return (
        <div>
            <h1 className="text-red-500 text-2xl">hello user! </h1>
            {budgets.map((budget) => (
                <div key={budget.id}>
                    <ul>
                        <li>
                            {" "}
                            <Link
                                href={route("budget.show", budget)}
                                className="btn btn-primary"
                            >
                                {" "}
                                {budget.name}{" "}
                            </Link>{" "}
                        </li>
                        <li> {budget.start_date} </li>
                        <li> {budget.end_date} </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Home;
