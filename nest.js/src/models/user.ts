import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity, DeleteDateColumn } from 'typeorm'
import { Item } from './item'
// import { Field, ID, ObjectType } from '@nestjs/graphql'

// @ObjectType()
@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    // @Field(type => ID)
    public id: number

    @Column({unique: true})
    // @Field({ nullable: false })
    public username: string

    @Column()
    // @Field({ nullable: false })
    public password: string

    @OneToMany(type => Item, item => item.user)
    items: Item[]

    // @Field({ type => ISO8601 })
    @CreateDateColumn({name: 'created_at', type: 'timestamp'})
    public createdAt: Date

    @UpdateDateColumn({name: 'updated_at',type: 'timestamp'})
    public updatedAt: Date

    @DeleteDateColumn({name: 'deleted_at',type: 'timestamp'})
    public deletedAt: Date
}
