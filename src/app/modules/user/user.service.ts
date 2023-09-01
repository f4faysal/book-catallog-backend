import { User } from "@prisma/client";
import bcrypt from 'bcrypt';
import httpStatus from "http-status";

import { Secret } from "jsonwebtoken";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (user: User): Promise<User> => {

     if (!user.password) {
          user.password = config.default_pass as string;
     }

     user.password = await bcrypt.hash(
          user.password,
          Number(config.bycrypt_salt_rounds)
     );

     const result = await prisma.user.create({ data: user });
     return result;

}


const getAllFromDB = async (): Promise<User[]> => {
     const result = await prisma.user.findMany();
     return result;
}


const getByIdFromDB = async (id: string): Promise<User | null> => {
     const result = await prisma.user.findUnique({ where: { id } });
     return result;
}

const updateIntoDB = async (id: string, payload: User): Promise<User | null> => {
     const result = await prisma.user.update({ where: { id }, data: payload });
     return result;


}


const deleteFromDB = async (id: string): Promise<User | null> => {
     const result = await prisma.user.delete({ where: { id } });
     return result;
}

const getProfile = async (id: string): Promise<User | null> => {
     const result = await prisma.user.findUnique({ where: { id } });
     return result;
}

const loginUser = async (payload: { email: string, password: string }) => {
     const { email, password } = payload;

     console.log(payload)

     const isPasswordMatched = async (givenPassword: string, savedPassword: string) => {

          return await bcrypt.compare(givenPassword, savedPassword);
     }
     const isUserExist = await prisma.user.findUnique({ where: { email } });

     if (!isUserExist) {
          throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
     }

     if (

          isUserExist.password && !(await isPasswordMatched(password, isUserExist.password))
     ) {
          throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
     }

     //create access token & refresh token

     const { email: userEmail, role } = isUserExist;
     const accessToken = jwtHelpers.createToken(
          { userEmail, role },
          config.jwt.secret as Secret,
          config.jwt.expires_in as string
     );



     return accessToken;

};






export const UserService = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB,
     getProfile,
     loginUser

}