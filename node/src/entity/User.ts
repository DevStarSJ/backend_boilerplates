import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public username: string;

    @Column()
    public password: string;

    @CreateDateColumn({name: 'created_at', type: "timestamp"})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at',type: "timestamp"})
    public updatedAt: Date;
}
