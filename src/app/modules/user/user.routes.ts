import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { UserController } from "./user.controller";


const router = express.Router();


router.post("/signup", UserController.insertIntoDB);
router.get("/users", UserController.getAllFromDB);
router.get("/users/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.getByIdFromDB);
router.patch("/users/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.updateIntoDB);
router.delete("/users/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.deleteFromDB);
router.get("/profile ", UserController.getProfile)

router.post("/auth/signin", UserController.loginUser);



export const UserRouter = router;