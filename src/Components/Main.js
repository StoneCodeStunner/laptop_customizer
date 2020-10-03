import React from "react";
import Features from "./Features";

export default function Main(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features
                clickUpdate={props.clickUpdate}
                features={props.features}
                currency={props.currency}
            />
        </form>
    );
}