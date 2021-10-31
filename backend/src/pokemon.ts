import { connect, Document, Model, model, Schema } from "mongoose";

connect("mongodb://localhost:27017/Pokemon");

interface IPokemon extends Document {
  _id: Number;
  name: String | RegExp;
  height: Number;
  weight: Number;
  types: String[];
  description: String;
  favorites: number;
}

const pokemonSchema = new Schema({
  _id: Number,
  name: String,
  height: Number,
  weight: Number,
  types: [String],
  description: String,
  favorites: Number,
});

const Pokemon: Model<IPokemon> = model("Pokemon", pokemonSchema);

export default Pokemon;
