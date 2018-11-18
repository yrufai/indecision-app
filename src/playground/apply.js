import React from "react";
import ReactDOM from "react-dom"

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            option: props.option //["thing one", "programming", "thing four", "the nextg thing", "what do you need"]
        }
    }

    componentDidMount() {
        const json = localStorage.getItem("data");
        const data = JSON.parse(json);

        this.setState(()=>({data }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.option.length !== this.state.option.length) {
            const json = JSON.stringify(this.state.option);
            localStorage.setItem("data", json)
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ option: [] }))
    }

    handlePickOption() {
        let randomly = Math.floor(Math.random() * this.state.option.length);
        let option = this.state.option[randomly]
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return " Enter valid value to add item"
        } else if (this.state.option.indexOf(option) > - 1) {
            return "This option already exist"
        }
        this.setState((prevState) => ({ option: prevState.option.concat(option) }));
    }

    render() {

        const subtitle = "Isha Allah, we are making progress";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.option.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    option={this.state.option}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title} </h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
IndecisionApp.defaultProps = {
    option: []
}

Header.defaultProps = {
    title: "Indecision"
}
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                disabled={!props.hasOptions}
            >
                What should I do?
                </button>
        </div>
    );
}


const Options = (props) => {
    return (
        <div>
            <br />
            {props.option.map((option) => <p key={option}>{option} </p>)}
            <button onClick={props.handleDeleteOptions} >Remove All </button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <p>inside options here</p>
        </div>
    );
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = " "

        this.setState(() => {
            return {
                error: error
            }
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error} </p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );

    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));