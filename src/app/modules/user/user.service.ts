import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (user: User): Promise<User> => {
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






export const UserService = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB
}