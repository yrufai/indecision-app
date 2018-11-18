import React from "react"
import Option from "./Option";

const Options = (props) => {
    return (
        <div>
            <div className="widget-header" >
                <h3 className="widget-header__title" >Your Options</h3>
                <button
                    className="button button--link"
                    onClick={props.handleDeleteOptions}
                >
                    Remove All
                </button>
            </div>
            {props.addOption.length === 0 && <p className="widget__message">please add an option to get started</p>}
            {
                props.addOption.map((option, index) => (
                    <Option
                        key={option}
                        optionText={option}
                        count={index + 1}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                ))
            }
        </div>
    );
}
export default Options;

