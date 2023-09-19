import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

export const getUserClerkID = async ({includes ={},select={}})=> {
    const {userId} = await auth()

    const user = await prisma.user.findUniqueOrThrow({
        where: {
            clerkId : userId,
        },
        select,
        includes
    })
    return user
}