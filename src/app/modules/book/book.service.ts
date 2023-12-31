import { Book } from "@prisma/client";

import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import prisma from "../../../shared/prisma";
import { bookSearchableFields } from "./book.contants";
import { IBookFilters } from "./book.interface";


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

const getAllFromDB = async (
     filters: IBookFilters,
     paginationOptions: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
     const { search, minPrice, maxPrice, category } = filters;
     const { page, limit, skip } = paginationHelpers.calculatePagination(paginationOptions);

     const andConditions = [];

     if (search) {
          andConditions.push({
               OR: bookSearchableFields.map((field) => ({
                    [field]: {
                         contains: search,
                         mode: 'insensitive',
                    },
               })),
          });
     }


     if (minPrice !== undefined) {
          andConditions.push({
               price: {
                    gte: parseFloat(minPrice),
               },
          });
     }

     if (maxPrice !== undefined) {
          andConditions.push({
               price: {
                    lte: parseFloat(maxPrice),
               },
          });
     }
     if (category !== undefined) {
          andConditions.push({
               categoryId: {
                    equals: category
               },
          });
     }

     const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

     const result = await prisma.book.findMany({
          include: {
               category: true,
          },
          where: whereConditions,
          skip,
          take: limit,
          orderBy:
               paginationOptions.sortBy && paginationOptions.sortOrder
                    ? { [paginationOptions.sortBy]: paginationOptions.sortOrder }
                    : {
                         price: 'asc',
                    },
     });

     const total = await prisma.book.count({
          where: whereConditions,
     });

     const totalPage = Math.ceil(total / limit);

     return {
          meta: {
               total,
               page,
               limit,
               totalPage,
          },
          data: result,
     };
};

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
const getBooksByCategoryId = async (categoryId: string,
     options: IPaginationOptions): Promise<IGenericResponse<Book[]>> => {


     const { page, limit, skip } = paginationHelpers.calculatePagination(options);


     const result = await prisma.book.findMany({
          where: {
               category: {

                    id: categoryId
               }
          },
          skip,
          take: limit,
          orderBy: options.sortBy && options.sortOrder ? { [options.sortBy]: options.sortOrder } : {
               price: 'desc'
          },
          include: {
               category: true
          }
     })

     const total = await prisma.book.count({
          where: {
               category: {
                    id: categoryId
               }
          }
     })

     const totalPage = Math.ceil(total / limit);

     return {
          meta: {
               total,
               page,
               limit,
               totalPage
          },
          data: result
     }

}

export const BookService = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB,
     getBooksByCategoryId
}












