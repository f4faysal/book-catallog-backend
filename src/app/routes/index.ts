import express from 'express';
import { BookRoutes } from '../modules/book/book.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { OrderRoutes } from '../modules/order/order.routes';
import { ReviewAndRatingRoutes } from '../modules/reviewAndRating/reviewAndRating.routes';
import { UserRouter } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/",
    routes: UserRouter
  },
  {
    path: "/categories",
    routes: CategoryRoutes
  },
  {
    path: "/books",
    routes: BookRoutes
  },
  {
    path: "/review-and-rating",
    routes: ReviewAndRatingRoutes
  },
  {
    path: "/orders",
    routes: OrderRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
