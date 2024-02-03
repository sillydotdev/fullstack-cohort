import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://hlxsjvfr:faI0NKozriQAXDCkQ2VKpX7JRY74eGac@tiny.db.elephantsql.com/hlxsjvfr");
    await client.connect();
    return client;
}