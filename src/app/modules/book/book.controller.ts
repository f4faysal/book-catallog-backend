import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookService } from "./book.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {

     const result = await BookService.insertIntoDB(req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Book created successfully",
          data: result
     })
})

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
     const result = await BookService.getAllFromDB();

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Book fetched successfully",
          data: result
     })
})

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
     const id = req.params.id;
     const result = await BookService.getByIdFromDB(id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Book fetched successfully",
          data: result
     })
}
)

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
     const id = req.params.id;

     const result = await BookService.updateIntoDB(id, req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Book updated successfully",
          data: result

     })
})


const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
     const id = req.params.id;

     const result = await BookService.deleteFromDB(id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Book deleted successfully",
          data: result

     })
}
)

export const BookController = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB
}
