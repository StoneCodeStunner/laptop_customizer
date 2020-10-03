import React from "react";
import Options from "./Options";
import slugify from "slugify";


export default function Features(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const options = props.features[feature].map((item) => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <Options
                    itemHash={itemHash}
                    item={item}
                    key={item.name}
                    clickUpdate={props.clickUpdate}
                    feature={feature}
                    featureHash={featureHash}
                    features={props.features}
                    currency={props.currency}
                />
            );
        });

        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        );
    });

    return <div>{features}</div>;
}