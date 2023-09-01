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


const getProfile = catchAsync(async (req: Request, res: Response) => {

     // Retrieve the user's _id & role from the access token
     const { userEmail } = req.user as { userEmail: string };

     const result = await UserService.getProfile(userEmail);

     sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: "Profile fetched successfully",
          data: result
     });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {

     const { ...loginData } = req.body;

     const result = await UserService.loginUser(loginData);

     // set refresh token into cookie


     sendResponse(res, {
          statusCode: 200,
          success: true,
          message: 'User logged in successfully !',
          token: result,
     });

});



export const UserController = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB,
     getProfile,
     loginUser
}