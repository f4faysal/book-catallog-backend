import { ReviewAndRating } from "@prisma/client";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (data: ReviewAndRating): Promise<ReviewAndRating> => {
     const result = await prisma.reviewAndRating.create(
          {
               data, include:
               {
                    user: true,
                    book: true
               }
          });
     return result;

}


const getAllFromDB = async (): Promise<ReviewAndRating[]> => {
     const result = await prisma.reviewAndRating.findMany();
     return result;
}


const getByIdFromDB = async (id: string): Promise<ReviewAndRating | null> => {
     const result = await prisma.reviewAndRating.findUnique({ where: { id } });
     return result;
}

const updateIntoDB = async (id: string, payload: ReviewAndRating): Promise<ReviewAndRating | null> => {
     const result = await prisma.reviewAndRating.update({ where: { id }, data: payload });
     return result;


}


const deleteFromDB = async (id: string): Promise<ReviewAndRating | null> => {
     const result = await prisma.reviewAndRating.delete({ where: { id } });
     return result;
}

const getProfile = async (id: string): Promise<ReviewAndRating | null> => {
     const result = await prisma.reviewAndRating.findUnique({ where: { id } });
     return result;
}






export const ReviewAndRatingService = {
     insertIntoDB,
     getAllFromDB,
     getByIdFromDB,
     updateIntoDB,
     deleteFromDB,
     getProfile,

}