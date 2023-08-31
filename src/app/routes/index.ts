import express from 'express';
import { UserRouter } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/",
    routes: UserRouter
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
