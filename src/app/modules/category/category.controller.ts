import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CategoryService } from "./category.service";

const insertIntoDB: RequestHandler = catchAsync(async (req: Request, res: Response) => {

     const result = await CategoryService.insertIntoDB(req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Category created successfully",
          data: result
     })
})


const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
     const result = await CategoryService.getAllFromDB();

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Category fetched successfully",
          data: result
     })
})

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const id = req.params.id;
     const result = await CategoryService.getByIdFromDB(id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Category fetched successfully",
          data: result
     })
})

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
     const id = req.params.id;

     const result = await CategoryService.updateIntoDB(id, req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Category updated successfully",
          data: result

     })
})


const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
     const id = req.params.id;

     const result = await CategoryService.deleteFromDB(id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Category deleted successfully",
          data: result
     })
})






export const CategoryController = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB
}