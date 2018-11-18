class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddone = this.handleAddone.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : props.count
        };
    }
    handleAddone() {
      this.setState((prevState)=>{
          return {
              count: prevState.count +1
          }
      });
    }

    handleMinusOne() {
        this.setState((prevState)=>{
            if(prevState.count>0){
                prevState.count = prevState.count-1
            }
            return {
                count:prevState.count
            }
        });
    }
    handleReset() {
        this.setState(()=>{
            return{
                count : 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count:{this.state.count} </h1>
                <button onClick={this.handleAddone} > +1</button>
                <button onClick={this.handleMinusOne} > -1</button>
                <button onClick={this.handleReset} > reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 65
}

ReactDOM.render(<Counter count={5899} />, document.getElementById("app"));




/*let count = 0;
const myId = "my-id";
const addOne = ()=>{
    count++;
    renderCount();
}
const minusOne = () => {
    if(count>0){
        count--
    }
    renderCount();
}
const reset = () => {
    count =0 ;
    renderCount();
}
const appRoot= document.getElementById("app");

const renderCount = ()=>{
    const templateTwo = (
        <div>
            <h1>count:{count}</h1>
            <button  onClick={addOne}>+1</button>
            <button onClick= {minusOne}>-1</button>
            <button onClick= {reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCount();
*/
