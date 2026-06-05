// import express from "express";
// import { createOrder } from "./order.controller.js";

// const router = express.Router();

// // CREATE ORDER
// router.post("/add", createOrder);

// export default router;


import express from "express";

const router = express.Router();

router.get("/add", (req, res) => {
    res.send("WORKING");
});

export default router;