import { MongoClient, ObjectId } from 'mongodb';
import { DB_CONNECTION } from '../config'


const client = new MongoClient( DB_CONNECTION! );

export const getEntries  =  async (name:string) => {
    const database = client.db('arve');
    const expenseCollection = database.collection(name);
    const expenses = await expenseCollection.find().toArray();
    return expenses
}

export const addEntry = async (name:string, entry: {summa:string, selgitus:string}) => {
    const database = client.db('arve')
    const expenseCollection = database.collection(name);
    await expenseCollection.insertOne(entry)
}

export const deleteEntry = async (name:string, id:string) => {
    const database = client.db('arve')
    const expenseCollection = database.collection(name);
    await expenseCollection.deleteOne({"_id" : new ObjectId(id)})
}

module.exports = {getEntries, addEntry, deleteEntry}


