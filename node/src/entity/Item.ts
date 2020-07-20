import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import {getManager} from "typeorm";
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
    @JoinColumn({ name: "user_id" })
    user: User | undefined;

    @CreateDateColumn({name: 'created_at', type: "timestamp"})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at',type: "timestamp"})
    public updatedAt: Date;

    constructor(name: string, price: number, user: User | undefined) {
        this.name = name
        this.price = price
        this.user = user
    }
}
