import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OrderService } from "./order.service";


const insertIntoDB = catchAsync(async (req: Request, res: Response) => {


     const { userId } = req.user as { userId: string };
     const products = req.body;


     const resutlt = await OrderService.insertIntoDB(products, userId);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Order created successfully",
          data: resutlt
     })
});


const getAllFromDB = catchAsync(async (req: Request, res: Response) => {

     const { userId, role } = req.user as { userId: string, role: string };

     const resutlt = await OrderService.getAllFromDB(userId, role);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Orders fetched successfully",
          data: resutlt
     })
});


const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const { orderId } = req.params;
     const { userId, role } = req.user as { userId: string, role: string };


     const resutlt = await OrderService.getByIdFromDB(orderId, userId, role);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Order fetched successfully",
          data: resutlt
     })
});


export const OrderController = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB
}


