import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

// async function test() {
//    const user = await db.user.findMany({
//         where:{
//             username: {
//                 contains:"a"
//             }
//         }
//     })
//     console.log(user)
// }

// test();

// async function test() {
//     const token = await db.sMSToken.create({
//         data: {
//             token :"123123",
//             user: {
//                 connect: {
//                     id:1
//                 }
//             }
//         }
//     })
//     console.log(token)
// }

async function test() {
    const token = await db.sMSToken.findUnique({
        where:{
            id:1
        },
        include:{
            user:true
        }
    })
    console.log(token)
}

test();

export default db; 