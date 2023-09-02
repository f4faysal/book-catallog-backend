"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = require("../modules/book/book.routes");
const category_routes_1 = require("../modules/category/category.routes");
const order_routes_1 = require("../modules/order/order.routes");
const reviewAndRating_routes_1 = require("../modules/reviewAndRating/reviewAndRating.routes");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: "/",
        routes: user_routes_1.UserRouter
    },
    {
        path: "/categories",
        routes: category_routes_1.CategoryRoutes
    },
    {
        path: "/books",
        routes: book_routes_1.BookRoutes
    },
    {
        path: "/review-and-rating",
        routes: reviewAndRating_routes_1.ReviewAndRatingRoutes
    },
    {
        path: "/orders",
        routes: order_routes_1.OrderRoutes
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
