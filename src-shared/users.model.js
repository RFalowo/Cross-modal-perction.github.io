import pkg from 'mongoose';
const { model } = pkg;
import userSchema from "./userSchema.js";
const UserModel = model("User-database", userSchema);
export default UserModel;
