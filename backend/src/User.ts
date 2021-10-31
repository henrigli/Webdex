import { connect, Document, Model, model, Schema } from "mongoose";
import Pokemon from "./pokemon";

interface IUser extends Document {
  name: String | RegExp;
  favorites: [typeof Pokemon];
}

const userSchema = new Schema({
  name: { type: String, unique: true },
  favorites: [
    {type: Number, ref: "Pokemon"}
  ],
});

export const User: Model<IUser> = model("User", userSchema);
