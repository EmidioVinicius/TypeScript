import {Entity, Column} from "typeorm";
import { BaseEntity } from "./baseEntity";

@Entity({ name: 'User'})// posso colocar o nome da tabela como vai ser gerada(opc)
export class User extends BaseEntity {


    @Column({type: 'varchar', length: 100})
    name: string

    @Column({type: 'varchar', length: 100})
    photo: string

    @Column({type: 'varchar', length: 100})
    email: string

    @Column({type: 'varchar', length: 100})
    isRoot: boolean

  
}
