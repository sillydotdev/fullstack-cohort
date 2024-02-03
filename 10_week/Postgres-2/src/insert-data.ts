import { Client } from 'pg'
 
async function insertData(username: string, email: string, password: string) {
    const client = new Client({
        connectionString: "postgresql://kamran145422:AmR6HCtqzDi2@ep-curly-union-a1fbzuat.ap-southeast-1.aws.neon.tech/test?sslmode=require"
      });
      
      try {
          await client.connect();
          const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
          const values = [username, email, password];
          const res = await client.query(insertQuery, values);
          console.log("Insersion successfull...",res);
          
      } catch(err) {
        console.log("Error during insertion...",err);  
      } finally {
        await client.end();
      }
}

insertData('danish', 'danish@gmail.com', 'hashed-password').catch(console.error);