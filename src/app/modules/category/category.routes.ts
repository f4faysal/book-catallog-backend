import express from "express";
import { CategoryController } from "./category.controller";


const router = express.Router();


router.post("/create-category", CategoryController.insertIntoDB);
router.get("/", CategoryController.getAllFromDB);
router.get("/:id", CategoryController.getByIdFromDB);
router.patch("/:id", CategoryController.updateIntoDB);
router.delete("/:id", CategoryController.deleteFromDB);



export const CategoryRoutes = router;