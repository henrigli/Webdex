import { connect, Document, Model, model, Schema } from "mongoose";
// import Pokemon, { IPokemon } from "./pokemon";

// connect("mongodb://localhost:27017/User");

interface IUser extends Document {
  name: String | RegExp;
  // pokemon: IPokemon[] | null;
}

const userSchema = new Schema({
  name: { type: String, unique: true },
  // pokemonFavorites: [Pokemon],
});

export const User: Model<IUser> = model("User", userSchema);
