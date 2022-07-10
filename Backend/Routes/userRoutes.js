import express from "express";
import { signin, signup } from "../Controller/users.js"

const router = express.Router();

router.post("/", signin)
router.post("/", signup)

export default router;