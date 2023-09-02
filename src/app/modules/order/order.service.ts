import { Order } from "@prisma/client";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";
import { OrderPayload } from "./order.interface";



const insertIntoDB = async (payload: OrderPayload, userId: string): Promise<Order> => {
     const data = {
          userId,
          ...payload,
     };

     const result = await prisma.order.create({
          data,
     });

     return result;
};

const getAllFromDB = async (userId: string, role: string) => {

     if (role === "admin") {
          const result = await prisma.order.findMany({
               include: {
                    user: true,
               },
          });
          return result;
     }

     if (role === "customer") {
          const result = await prisma.order.findMany({
               where: {
                    userId,
               },
               include: {
                    user: true,
               },
          });
          return result;
     }

};

const getByIdFromDB = async (orderId: string, userId: string, role: string) => {
     // Check if the user is an admin (no further checks required)
     if (role === 'admin') {
          const adminResult = await prisma.order.findUnique({
               where: {
                    id: orderId,
               },
               include: {
                    user: true,
               },
          });
          return adminResult;
     }

     if (role === 'customer') {
          const customerResult = await prisma.order.findUnique({
               where: {
                    id: orderId,

               },
               include: {
                    user: true,
               },
          });

          if (!customerResult) {

               throw new ApiError(httpStatus.BAD_REQUEST, 'Order not found');
          }

          if (customerResult.userId !== userId) {

               throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized: You do not have permission to access this order');
          }


          return customerResult;
     }


};






export const OrderService = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB
}