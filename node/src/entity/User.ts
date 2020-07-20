import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import { Item } from "./Item";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({unique: true})
    public username: string;

    @Column()
    public password: string;

    @OneToMany(type => Item, item => item.user)
    items: Item[];

    @CreateDateColumn({name: 'created_at', type: "timestamp"})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at',type: "timestamp"})
    public updatedAt: Date;
}
