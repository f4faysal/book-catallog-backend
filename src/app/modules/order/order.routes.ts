

import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { OrderController } from "./order.controller";

const router = express.Router();


router.post("/create-order", auth(ENUM_USER_ROLE.CUSTOMER), OrderController.insertIntoDB);
router.get("/", OrderController.getAllFromDB);
router.get("/:orderId", auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER), OrderController.getByIdFromDB);


export const OrderRoutes = router;