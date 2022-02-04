const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const PORT = 5000;

//middleware:
app.use(cors());
app.use(express.json());


//get user:

//update user:

//delete user:

//logout:




app.listen(PORT, ()=> {
    console.log(`Up and running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send("Hello World!");
})