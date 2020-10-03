import React from "react";
import Total from "./Total";
import Selection from "./Product";

export default function Summary(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Selection selected={props.selected} currency={props.currency} />
            <div className="summary__total">
                <Total selected={props.selected} currency={props.currency} />
            </div>
        </section>
    );
}