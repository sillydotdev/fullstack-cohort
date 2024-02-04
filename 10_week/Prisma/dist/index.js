"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findMany();
        console.log(users);
    });
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
