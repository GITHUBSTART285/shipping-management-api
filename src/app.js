import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes.js";
import orderRoutes from "./modules/orders/order.routes.js";
import shippingRoutes from "./modules/shipping/shipping.routes.js";
 import mediaRoutes from "./modules/media/media.routes.js";
 import shipmentRoutes from "./modules/shipment/shipment.routes.js";
import policyRoutes from "./modules/policy/policy.routes.js";
import featureRoutes from "./modules/features/feature.routes.js";
import featureBannerRoutes from "./modules/feature-banner/featureBanner.routes.js";
import shippingProcessRouter from "./modules/shipping-process/shippingProcess.routes.js";
const app = express();
//  1. CORS FIRST
app.use(cors({
  origin: [
    "http://localhost:3000",
     "http://192.168.1.56:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
   credentials: true
}));

// Middleware

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/shipping", shippingRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/shipment-types", shipmentRoutes);
app.use("/api/policies", policyRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/feature-banner", featureBannerRoutes);
app.use("/api/shipping-process",shippingProcessRouter);
// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running Successfully 🚀"
  });
});

export default app;