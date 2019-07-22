import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity{
    

    @PrimaryGeneratedColumn()
    uid: string;
    
    @Column({ default: true})
    active: boolean

    @Column({default: false})
    delete: boolean

    @CreateDateColumn({type: 'timestamp'})
    createAt: Date

    @UpdateDateColumn({type: 'timestamp'})
    upadate: Date
}