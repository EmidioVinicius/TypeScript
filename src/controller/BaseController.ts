import {Request, Response, NextFunction} from 'express'
import { Repository, getRepository } from 'typeorm';
import { BaseNotification } from '../entity/BaseNotification';

export abstract class BaseController <T> extends BaseNotification{//generics "pode ser qualquer letra"
    
    private _repository: Repository<T>
    
    constructor(entity: any){
        super()
        this._repository = getRepository<T>(entity)
    
    
    }
    async all(request: Request, response: Response, next: NextFunction) {
        return this._repository.find();
    }

    async one(request: Request) {
        return this._repository.findOne(request.params.id);
    }

    async save(model: any) {
        
        if(model.uid){
            let _modelInDB = await this._repository.findOne(model.uid)
            if(_modelInDB){
                Object.assign(_modelInDB, model)
            }
        }

        if(this.valid())
         return this._repository.save(model);
        else
            return{
                status: 400,
                errors: this.allNotifications
        }
    
    
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let uid = request.params.id
        let model: any = await this._repository.find(uid)
        if(model){
            model.deleted = true
        }
        return await this._repository.save(model)
    }
}