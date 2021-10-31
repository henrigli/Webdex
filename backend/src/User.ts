import { connect, Document, Model, model, Schema } from "mongoose";
import Pokemon from "./pokemon";

interface IUser extends Document {
  name: String | RegExp;
  favorites: number[];
}

const userSchema = new Schema({
  name: { type: String, unique: true },
  favorites: [Number],
});

export const User: Model<IUser> = model("User", userSchema);
