import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import { User } from "./User";

@Entity('items')
export class Item {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public price: number;

    @ManyToOne(type => User, user => user.items)
    user: User;

    @CreateDateColumn({name: 'created_at', type: "timestamp"})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at',type: "timestamp"})
    public updatedAt: Date;
}
