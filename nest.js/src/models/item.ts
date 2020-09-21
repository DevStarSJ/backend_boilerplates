import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, BaseEntity, DeleteDateColumn } from 'typeorm'
import { User } from './user'
import { ItemInput } from 'src/inputs/itemInput'
import { ObjectType, Field, ID, Int } from '@nestjs/graphql'

@Entity('items')
@ObjectType()
export class Item extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  public id: number

  @Field()
  @Column({unique: true})
  public name: string

  @Field(() => Int)
  @Column()
  public price: number

  @Field(() => ID, { nullable: true })
  @Column({name: 'user_id', nullable: true})
  userId: number

  // @Field(() => User, { nullable: true })
  // @ManyToOne(() => User, user => user.items)
  // @JoinColumn({ name: 'user_id' })
  // user?: User

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, user => user.items, { primary: true })
  @JoinColumn({ name: 'user_id' })
  user: Promise<User>

  @Field()
  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  public createdAt: Date

  @Field()
  @UpdateDateColumn({name: 'updated_at',type: 'timestamp'})
  public updatedAt: Date

  @DeleteDateColumn({name: 'deleted_at',type: 'timestamp'})
  public deletedAt: Date

  constructor(params?: ItemInput) {
    super()
    if (!params) return

    if (params.name) this.name = params.name
    if (params.price) this.price = params.price
    if (params.userId) this.userId = params.userId
  }
}
