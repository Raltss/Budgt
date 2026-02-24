import React from "react";
import { Link } from "@inertiajs/react";
import Modal from "../Components/Modals.jsx";
import { useRef } from "react";

function Home({ budgets }) {
    const modalRef = useRef(null);
    return (
        <div className="flex justify-center items-center">
            <BudgetList budgets={budgets} modalRef={modalRef} />
            <Modal ref={modalRef} />
        </div>
    );
}

function BudgetList({ budgets, modalRef }) {
    return (
        <div>
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold mb-4"> BUDGET LIST </h1>
                <button
                    className="btn btn-neutral p-5"
                    onClick={() => modalRef.current.showModal()}
                >
                    {" "}
                    ADD BUDGET{" "}
                </button>
            </div>

            {budgets.map((budget, index) => (
                <div key={budget.id}>
                    <ul className="list bg-base-100 rounded-box shadow-md border border-white p-3 mb-4 hover:border-slate-300/60 w-[70vw]">
                        <Link
                            className="list-row cursor-pointer hover:bg-slate-700/60"
                            href={route("budget.show", budget)}
                        >
                            <div className="text-4xl font-thin opacity-30 tabular-nums">
                                0{index + 1}
                            </div>
                            <div className="list-col-grow">
                                <h2 className="text-2xl"> {budget.name} </h2>{" "}
                                <div className="text-md text-slate-300/60">
                                    Tap to show details
                                </div>
                            </div>
                        </Link>
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default Home;
