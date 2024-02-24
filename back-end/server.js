// const express = require("express"); // we don't wanna use this therefore we use ->
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with json payloads (from req.body)

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   // root route http://localhost:5000/

//   res.send("Hello World !!!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
