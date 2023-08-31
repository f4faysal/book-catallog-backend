import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OrderService } from "./order.service";


const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
     const resutlt = await OrderService.insertIntoDB(req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Order created successfully",
          data: resutlt
     })
});


const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
     const resutlt = await OrderService.getAllFromDB();

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Orders fetched successfully",
          data: resutlt
     })
});


const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const { id } = req.params;
     const resutlt = await OrderService.getByIdFromDB(id);

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


