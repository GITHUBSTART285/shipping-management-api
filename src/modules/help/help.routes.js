import express from "express";
import {
  createHelp,
  getHelp,
} from "./help.controller.js";

const router = express.Router();

router.post("/", createHelp);
router.get("/", getHelp);

export default router;