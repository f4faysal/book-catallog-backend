import express from "express";
import { UserController } from "./user.controller";


const router = express.Router();


router.post("/signup", UserController.insertIntoDB);
router.get("/users", UserController.getAllFromDB);
router.get("/users/:id", UserController.getByIdFromDB);
router.patch("/users/:id", UserController.updateIntoDB);
router.delete("/users/:id", UserController.deleteFromDB);



export const UserRouter = router;