import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
/*
    let newUser = await User.create({
        name:{
            firstName: "Diego",
            lastName:"Carneiro"
        },
        email: "diego@gmail.com",
        age: 20,
        interests:["games", "hardware", "sugary things"]
    });
*/

//BETTER WAY OF INSERTING ------------------------------------------------------------------------
/*
    let user = new User();
    user.name.firstName = "Bruno";
    user.name.lastName = "Uber";
    user.email = "bruno@gmail.com";
    user.age = 19;
    user.interests = ["tattoos", "gym", "army"];
    let resultado = await user.save();

    console.log("new user:", resultado);
*/


    let users = await User.find({ age: { $gte: 20} }).sort({ "name.firstName": 1, age: 1 }).skip(0).limit(5);
    console.log("Users:", users);

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};