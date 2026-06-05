import express from "express";
console.log("===== SHIPPING ROUTES FILE LOADED =====");
import {
  createShipping,
getShippingCharges
} from "./shipping.controller.js";

const router = express.Router();

// CREATE SHIPPING
router.post("/create", createShipping);

router.get("/test",(req,res)=>{
 res.send("WORKING");
});
router.get("/charges", getShippingCharges);

export default router;