import { Request, Response } from 'express';
import { Restaurante } from '@models/Restaurante';
import { Citi, Crud } from '../global'

export default class RestauranteController implements Crud {

    async create(request: Request, response: Response){
        const {name, adress, kindOfFood} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(name, adress, kindOfFood);
        if(isAnyUndefined) return response.status(400).send();

        const newRestaurante = { name, adress, kindOfFood };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Restaurante, newRestaurante);

        return response.status(httpStatus).send({ message });
    }
    
    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Restaurante);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: userFound, message } = await Citi.findByID(Restaurante, id); 
           
        if(!userFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Restaurante, userFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {name, adress, kindOfFood } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(name, adress, kindOfFood, id);
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = { name, adress, kindOfFood };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Restaurante, id, userWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

}