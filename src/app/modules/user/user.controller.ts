import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";



const insertIntoDB: RequestHandler = catchAsync(async (req: Request, res: Response) => {
     const result = await UserService.insertIntoDB(req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "User created successfully",
          data: result
     });
});


const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
     const result = await UserService.getAllFromDB();

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "User fetched successfully",
          data: result
     });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const id = req.params.id;
     const result = await UserService.getByIdFromDB(id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "User fetched successfully",
          data: result
     });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
     const id = req.params.id;
     const result = await UserService.updateIntoDB(id, req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "User updated successfully",
          data: result
     });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
     const id = req.params.id;
     const result = await UserService.deleteFromDB(id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "User deleted successfully",
          data: result
     });

});



export const UserController = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB
}