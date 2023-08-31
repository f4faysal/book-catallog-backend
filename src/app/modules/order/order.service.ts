import { Order } from "@prisma/client";
import prisma from "../../../shared/prisma";


const insertIntoDB = async (data: Order): Promise<Order> => {
     const result = await prisma.order.create(
          {
               data
          });
     return result;

}

const getAllFromDB = async (): Promise<Order[]> => {
     const result = await prisma.order.findMany();
     return result;
}

const getByIdFromDB = async (id: string): Promise<Order | null> => {
     const result = await prisma.order.findUnique({ where: { id } });
     return result;
}



export const OrderService = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB
}