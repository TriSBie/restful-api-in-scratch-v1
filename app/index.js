const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET', 'POST', 'PUT', 'DELETE')
    next();
})

app.use("/api", require("./routers/dev"))

app.listen(PORT, () => {
    console.log("Server is listening at port ", PORT);
})