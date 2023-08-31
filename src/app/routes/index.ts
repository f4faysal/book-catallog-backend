import express from 'express';
import { CategoryRoutes } from '../modules/category/category.routes';
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
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
