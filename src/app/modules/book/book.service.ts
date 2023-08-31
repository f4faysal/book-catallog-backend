import { Book } from "@prisma/client";

import prisma from "../../../shared/prisma";


const insertIntoDB = async (data: Book): Promise<Book> => {
     const result = await prisma.book.create(
          {
               data,
               include: {
                    category: true
               }
          }

     );
     return result;

}

const getAllFromDB = async (): Promise<Book[]> => {
     const result = await prisma.book.findMany({
          include: {
               category: true
          }
     });
     return result;
}

const getByIdFromDB = async (id: string): Promise<Book | null> => {
     const result = await prisma.book.findUnique({ where: { id } });
     return result;
}

const updateIntoDB = async (id: string, payload: Book): Promise<Book | null> => {
     const result = await prisma.book.update({ where: { id }, data: payload });
     return result;

}

const deleteFromDB = async (id: string): Promise<Book | null> => {
     const result = await prisma.book.delete({ where: { id } });
     return result;
}

export const BookService = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB
}