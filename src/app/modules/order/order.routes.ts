

import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();


router.post("/", OrderController.insertIntoDB);
router.get("/", OrderController.getAllFromDB);
router.get("/:id", OrderController.getByIdFromDB);


export const OrderRoutes = router;