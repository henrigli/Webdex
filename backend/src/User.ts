import { connect, Document, Model, model, Schema } from "mongoose";

// connect("mongodb://localhost:27017/User");

interface IUser extends Document {
  _id: Number;
  _name: String | RegExp;
}

const userSchema = new Schema({
  _id: Number,
  _name: String,
});

export const User: Model<IUser> = model("User", userSchema);
