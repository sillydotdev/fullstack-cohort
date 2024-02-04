import { PrismaClient } from "@prisma/client"; 

const prisma  = new PrismaClient();

// insert data using Prisma
// async function insertUser(email: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create ({
//         data: {
//             email,
//             password,
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);   
// }

// insertUser("mariya@gmail.com", "32323232", "Mariya", "Jannat");


// update data using Prisma
// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(email: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     const res = await prisma.user.update({
//         where: { email },
//         data: {
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);
// }

// updateUser("yahya@google.com", {
//     firstName: "shahid",
//     lastName: "malik"
// })


// Get data using Prisma
// async function getUser(email: string) {
//     const user = await prisma.user.findFirst({
//         where: {
//             email: email
//         }
//     })
//     console.log(user);  
// }
// getUser("yahya@google.com")


// Get all the users using Prisma
async function getAllUsers() {
    const users = await prisma.user.findMany();
    console.log(users);   
}
getAllUsers();


// Delete a user using Prisma
// async function deleteUser(email: string) {
//     const res = await prisma.user.delete({
//         where: { email }
//     })
//     console.log(res);   
// }
// deleteUser("mariya@gmail.com")
