const app = {
    title: "my way to new york",
    subtitle: "we are going to make by the grace of the almighty Allah",
    options: []
}

const onFormSubmit= (e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option != " "){
        app.options.push(option);
        e.target.elements.option.value = " ";
        renderTemplate()
    }
}

const removeAll= ()=>{
    app.options= [];
    renderTemplate();
}
const onMakeDecision= ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    renderTemplate();
}

const appRoot = document.getElementById("app");

const renderTemplate= ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options": "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((arr)=>{
                    return <li key={arr}> {arr}</li>
                })}
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button >Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderTemplate();




 

