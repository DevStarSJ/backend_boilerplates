import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
// import { Field, ID, ObjectType } from '@nestjs/graphql'

// @ObjectType()
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    // @Field(type => ID)
    public id: number

    @Column({unique: true})
    // @Field({ nullable: false })
    public username: string

    @Column()
    // @Field({ nullable: false })
    public password: string

    // @Field({ type => ISO8601 })
    @CreateDateColumn({name: 'created_at', type: 'timestamp'})
    public createdAt: Date

    @UpdateDateColumn({name: 'updated_at',type: 'timestamp'})
    public updatedAt: Date
}
