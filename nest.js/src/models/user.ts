import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity, DeleteDateColumn } from 'typeorm'
import { Item } from './item'
import { ObjectType, Field, ID } from '@nestjs/graphql'
import { SocialAuth } from './socialAuth'

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  public id: number

  @Column({unique: true})
  @Field({ nullable: false })
  public email: string

  @Column()
  @Field({ nullable: true })
  public password: string

  @Field(() => [Item], { nullable: true })
  @OneToMany(() => Item, item => item.user)
  items: Promise<Item[]>

  @Field(() => [SocialAuth], { nullable: true })
  @OneToMany(() => SocialAuth, socialAuth => socialAuth.user)
  socialAuths: Promise<SocialAuth[]>

  @Field()
  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  public createdAt: Date

  @Field()
  @UpdateDateColumn({name: 'updated_at',type: 'timestamp'})
  public updatedAt: Date

  @DeleteDateColumn({name: 'deleted_at',type: 'timestamp'})
  public deletedAt: Date

  constructor(email: string, password?: string) {
    super()
    this.email = email
    this.password = password
  }
}
