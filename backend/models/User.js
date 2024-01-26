import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    secondName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userCategory: {
        type: String,
        enum: ['supplier', 'retailers', 'logistics'],
        required: true,
    },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
