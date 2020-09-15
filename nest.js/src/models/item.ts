import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, BaseEntity, DeleteDateColumn } from 'typeorm'
import { User } from './user'
// import { Field, ID, ObjectType } from '@nestjs/graphql'

// @ObjectType()
@Entity('items')
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    // @Field(type => ID)
    public id: number

    @Column({unique: true})
    // @Field({ nullable: false })
    public name: string

    @Column()
    // @Field({ nullable: false })
    public price: number

    @Column({name: 'user_id', nullable: true})
    userId: number

    @ManyToOne(type => User, user => user.items)
    @JoinColumn({ name: 'user_id' })
    user?: User

    // @Field({ type => ISO8601 })
    @CreateDateColumn({name: 'created_at', type: 'timestamp'})
    public createdAt: Date

    @UpdateDateColumn({name: 'updated_at',type: 'timestamp'})
    public updatedAt: Date

    @DeleteDateColumn({name: 'deleted_at',type: 'timestamp'})
    public deletedAt: Date
}
