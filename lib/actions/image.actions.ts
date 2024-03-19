"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// add image 
export async function addImage({ image, userId, path}: AddImageParams){
    try{
        await connectToDatabase();

        revalidatePath(path);


    }catch(error){
        handleError(error);
    }
}