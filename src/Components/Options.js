import React from "react"
import slugify from "slugify"

export default function Options(props) {
    return (
        <div>
            <div key={props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={props.itemHash}
                    className="feature__option"
                    name={slugify(props.feature)}
                    onChange={(e) => props.clickUpdate(props.feature, props.item)}
                />
                <label htmlFor={props.itemHash} className="feature__label">
                    {props.item.name} ({props.currency.format(props.item.cost)})
        </label>
            </div>
            <fieldset className="feature" key={props.featureHash}>
                <legend className="feature__name"></legend>
                {props.options}
            </fieldset>
        </div>
    );
}