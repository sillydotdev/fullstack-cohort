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
const pg_1 = require("pg");
function getData(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://kamran145422:AmR6HCtqzDi2@ep-curly-union-a1fbzuat.ap-southeast-1.aws.neon.tech/test?sslmode=require"
        });
        try {
            yield client.connect();
            const getDataQuery = "SELECT * FROM users WHERE email = $1";
            const value = [email];
            const res = yield client.query(getDataQuery, value);
            if (res.rows.length > 0) {
                console.log("User found: ", res.rows[0]);
                return res.rows[0];
            }
            else {
                console.log("User not found...");
                return null;
            }
        }
        catch (err) {
            console.log("Error while getting the data...", err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
getData('danish@gmail.com').catch(console.error);
