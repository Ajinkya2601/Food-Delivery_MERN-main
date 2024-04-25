import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // _id : ObjectId,         // in mongoDB _id is in the form of 'ObjectId'  if u want to access this id somewhere in frontend it have to used as a string
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  ingredients: {
    type: [String], // Array of strings
  }
});

const User = mongoose.model("User", userSchema);
export default User;