class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state={
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibilit && (
                    <div> <p>Hey!. These are some details you can now see</p></div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));



/*let show = false;
const toggleButton = () => {
    show = !show;
    visibility();
}

const visibility = () => {
    
    const visiby = (
        <div>
            <h1>visibility Toggle</h1>
            <button onClick={toggleButton}>
                {show ? "Hide details" : "Show details"}
            </button>
            {show && (
                <div> <p>Hey!. These are some details you can now see</p></div>
            )}
        </div>

    );
    ReactDOM.render(visiby, document.getElementById("app"));
}
visibility();
*/