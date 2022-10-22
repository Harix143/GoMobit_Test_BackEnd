const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    cell: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 60,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
},
{timestamps: true}
)


module.exports = mongoose.model("User", userSchema);
