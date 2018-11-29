const path = require("path");
const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

const publicPath = path.join(__dirname, "public")

app.use(express.static(publicPath));

app.get("*",(req, res)=>{
    res.sendFile(path.join(publicPath, "index.html"))
});

app.listen(port, ()=>{
    console.log("server is up and running")
})