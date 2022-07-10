import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = Schema({
    firstName: {type : String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    passwrod: {type: String, required: true},
    dateOfBirth: {type : Date, required: true},
    id : String
})

const userModel = mongoose.model("userModel", userSchema)
export default userModel;