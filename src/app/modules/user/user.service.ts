import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (user: User): Promise<User> => {
     const result = await prisma.user.create({ data: user });
     return result;
}



export const UserService = {
     insertIntoDB
}