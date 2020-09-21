import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity, DeleteDateColumn } from 'typeorm'
import { Item } from './item'
import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  public id: number

  @Column({unique: true})
  @Field({ nullable: false })
  public username: string

  @Column()
  @Field({ nullable: false })
  public password: string

  // @Field(() => [Item], { nullable: true })
  // @OneToMany(() => Item, item => item.user)
  // items: Item[]

  @Field(() => [Item], { nullable: true })
  @OneToMany(() => Item, item => item.user)
  items: Promise<Item[]>

  @Field()
  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  public createdAt: Date

  @Field()
  @UpdateDateColumn({name: 'updated_at',type: 'timestamp'})
  public updatedAt: Date

  @DeleteDateColumn({name: 'deleted_at',type: 'timestamp'})
  public deletedAt: Date

  constructor(username: string, password: string) {
    super()
    this.username = username
    this.password = password
  }
}
