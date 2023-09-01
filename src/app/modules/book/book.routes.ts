import express from "express";
import { BookController } from "./book.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";



const router = express.Router();


router.post("/create-book", auth(ENUM_USER_ROLE.ADMIN), BookController.insertIntoDB);
router.get("/", BookController.getAllFromDB);
router.get("/:categoryId/category ", BookController.getByIdFromDB);
router.get("/:id", BookController.getByIdFromDB);
router.patch("/:id", auth(ENUM_USER_ROLE.ADMIN), BookController.updateIntoDB);
router.delete("/:id", auth(ENUM_USER_ROLE.ADMIN), BookController.deleteFromDB);



export const BookRoutes = router;