const mongoose = require("mongoose");
const { Schema, Types, model } = mongoose;
exports.User = model(
  "User",
  new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      favourites: [{ type: Types.ObjectId, ref: "Song" }],
    },
    { timestamps: true }
  )
);
