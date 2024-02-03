import { Client } from 'pg'

async function getData(email:string) {
    const client = new Client({
        connectionString: "postgresql://kamran145422:AmR6HCtqzDi2@ep-curly-union-a1fbzuat.ap-southeast-1.aws.neon.tech/test?sslmode=require"
    });

    try {
        await client.connect();
        const getDataQuery = "SELECT * FROM users WHERE email = $1";
        const value = [email];
        const res = await client.query(getDataQuery, value);
        if (res.rows.length > 0) {
            console.log("User found: ",res.rows[0]);
            return res.rows[0];
        } else {
            console.log("User not found...");
            return null;
        }
    } catch (err) {
        console.log("Error while getting the data...",err);
        throw err;
    } finally {
        await client.end();
    }
}

getData('danish@gmail.com').catch(console.error)