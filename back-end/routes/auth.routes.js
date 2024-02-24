import express from "express";
import { Signup, Login, Logout } from "../controllers/auth.controllers.js";

const router = express.Router();

// The functions written inside the router below maybe huge, hence we will need to write more lines of code which will make this file less readable there for we will be using "Controllers"

// router.get("/login", (req, res) => {
//   res.send("Login Route");
// });

// router.get("/signup", (req, res) => {
//   res.send("Signup Route");
// });

// router.get("/logout", (req, res) => {
//   res.send("Logout Route");
// });

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

export default router;
