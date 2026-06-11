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
import shippingAudienceRouter from "./modules/shipping-audience/shippingAudience.routes.js";
import shippingCategoryRouter from "./modules/shipping-category/shippingCategory.routes.js";
import appointmentRoutes from "./modules/appointmentDelivery/appointment.routes.js";
import dealRoutes from "./modules/deal/deal.routes.js";
import segmentRoutes from "./modules/segment/segment.routes.js";
import courierRoutes from "./modules/courier/courier.routes.js";
import contactRoutes from "./modules/contact-details/contact.routes.js";
import bigshipRoutes from "./modules/bigship/bigship.routes.js";
import bannerRoutes from "./modules/banner/banner.routes.js";
import ourFeaturesRoutes from "./modules/our-features/ourFeatures.routes.js";
import helpRoutes from "./modules/help/help.routes.js";


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
app.use("/api/shipping-audience", shippingAudienceRouter);
app.use("/api/shipping-category",shippingCategoryRouter);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/segments", segmentRoutes);
app.use("/api/couriers", courierRoutes);
app.use("/api/contact-details", contactRoutes);
app.use("/api/bigship", bigshipRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/our-features", ourFeaturesRoutes);
app.use("/api/help", helpRoutes);


// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running Successfully "
  });
});

export default app;