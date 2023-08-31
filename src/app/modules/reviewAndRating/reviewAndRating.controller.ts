import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ReviewAndRatingService } from "./reviewAndRating.service";

const insertIntoDB: RequestHandler = catchAsync(async (req: Request, res: Response) => {
     const result = await ReviewAndRatingService.insertIntoDB(req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "ReviewAndRatingService created successfully",
          data: result
     });
});


const getAllFromDB: RequestHandler = catchAsync(async (req: Request, res: Response) => {
     const result = await ReviewAndRatingService.getAllFromDB();

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "ReviewAndRatingService fetched successfully",
          data: result
     });
});

const getByIdFromDB: RequestHandler = catchAsync(async (req: Request, res: Response) => {
     const result = await ReviewAndRatingService.getByIdFromDB(req.params.id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "ReviewAndRatingService fetched successfully",
          data: result
     });
});

const updateIntoDB: RequestHandler = catchAsync(async (req: Request, res: Response) => {
     const result = await ReviewAndRatingService.updateIntoDB(req.params.id, req.body);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "ReviewAndRatingService update successfully",
          data: result
     });
}
);

const deleteFromDB: RequestHandler = catchAsync(async (req: Request, res: Response) => {
     const result = await ReviewAndRatingService.deleteFromDB(req.params.id);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "ReviewAndRatingService Deleted successfully",
          data: result
     });
});


export const ReviewAndRatingController = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB
}