
import AddOptions from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import React from "react"
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handleClearModal = this.handleClearModal.bind(this);
        this.state = {
            option: [],
            selectedOption: undefined
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        const json = localStorage.getItem("data");
        const dats = JSON.parse(json);

        this.setState(() => ({ option: dats }));
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("saving data in local storage")
        if (prevState.option.length !== this.state.option.length) {
            const json = JSON.stringify(this.state.option);
            localStorage.setItem("data", json)
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ option: [] }))
    }

    handleRemoveOption(optionToRemove) {
        this.setState((prevState) => ({
            option: prevState.option.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    handlePickOption() {
        let randomly = Math.floor(Math.random() * this.state.option.length);
        let option = this.state.option[randomly]
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleClearModal() {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }
    handleAddOption(option) {
        if (!option) {
            return " Enter valid value to add item"
        } else if (this.state.option.indexOf(option) > - 1) {
            return "Option already exist"
        }
        this.setState((prevState) => ({ option: prevState.option.concat(option) }));
    }

    render() {
        const title = "INDECISION APP"
        const subtitle = "Isha Allah, i'm are making progress";
        return (
            <div>
                <Header subtitle={subtitle} title={title} />

                <div className="container">
                    <Action
                        hasOptions={this.state.option.length > 0}
                        handlePickOption={this.handlePickOption}
                    />
                    <div className="widget">
                        <Options
                            addOption={this.state.option}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleRemoveOption={this.handleRemoveOption}
                        />
                        <AddOptions
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearModal={this.handleClearModal}
                />
            </div>
        );
    }
}

export default IndecisionApp;
