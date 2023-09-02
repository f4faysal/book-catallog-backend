"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewAndRatingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const reviewAndRating_controller_1 = require("./reviewAndRating.controller");
const router = express_1.default.Router();
router.post("/create-review", reviewAndRating_controller_1.ReviewAndRatingController.insertIntoDB);
exports.ReviewAndRatingRoutes = router;
