const express = require("express");
const router = express.Router();
const User = require("../models/register");

router.get("/", async (req, res) => {
    try {
        const user = await User.find();
        //console.log(user)
        res.json(user);
    } catch (err) {
        res.json("Error" + err)
    }
});

router.post("/", async (req, res) => {
    //console.log(req.body)
    const auser = new User({
        name: req.body.name,
        email: req.body.email,
        cell: req.body.cell,
        age: parseInt(req.body.age),
    });
    try {
        const a1 = await auser.save();
        // console.log(auser)
        //console.log(a1)
        res.json(a1)

    } catch (err) {
        //console.log("Error" + err)
        res.json("Error" + err)

    }
});

module.exports = router;
