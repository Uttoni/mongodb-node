import {connect} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try{
        console.log("Connecting to MongoDB...");
        await connect(process.env.MONGO_URL as string);

        console.log("MongoDB connected successfuly");

    }catch(error){
        console.log("Connection error with MongoDB", error);
    }
}