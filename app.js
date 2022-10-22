const express = require("express");
const cors = require("cors");
const app = express();
require("./db/conn");
const users = require("./routes/users")
app.use(express.json());
app.use(cors());

app.use("/users", users)


app.listen(4000, () => {
    console.log("Server is Running");
})

