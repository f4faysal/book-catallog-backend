import express from "express";
import { BookController } from "./book.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";



const router = express.Router();


router.post("/create-book", auth(ENUM_USER_ROLE.ADMIN), BookController.insertIntoDB);
router.get("/", BookController.getAllFromDB);
router.get("/:id", BookController.getByIdFromDB);
router.patch("/:id", BookController.updateIntoDB);
router.delete("/:id", BookController.deleteFromDB);



export const BookRoutes = router;