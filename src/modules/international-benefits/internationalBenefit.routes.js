
import express from "express";
import { createInternationalBenefit,getAllInternationalBenefits,
    updateInternationalBenefit, deleteInternationalBenefit,
} from "./internationalBenefit.controller.js";

const router = express.Router();

router.post("/", createInternationalBenefit);
router.get("/", getAllInternationalBenefits);
router.put("/:id", updateInternationalBenefit);
router.delete("/:id", deleteInternationalBenefit);
export default router;