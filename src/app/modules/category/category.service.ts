import { Category } from "@prisma/client";

import prisma from "../../../shared/prisma";


const insertIntoDB = async (data: Category): Promise<Category> => {
     const result = await prisma.category.create({ data });
     return result;

}


const getAllFromDB = async (): Promise<Category[]> => {
     const result = await prisma.category.findMany();
     return result;
}


const getByIdFromDB = async (id: string): Promise<Category | null> => {
     const result = await prisma.category.findUnique({ where: { id } });
     return result;
}

const updateIntoDB = async (id: string, payload: Category): Promise<Category | null> => {
     const result = await prisma.category.update({ where: { id }, data: payload });
     return result;

}

const deleteFromDB = async (id: string): Promise<Category | null> => {
     const result = await prisma.category.delete({ where: { id } });
     return result;
}

export const CategoryService = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB
}