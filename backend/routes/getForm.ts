import { MongoClient } from 'mongodb';
import { DB_CONNECTION } from '../config'


const client = new MongoClient( DB_CONNECTION! );


export const getEntries  =  async (name:string) => {
    const database = client.db('arve');
    const expenses = database.collection(name);
    const expense = await expenses.findOne({});
    return expense
}



