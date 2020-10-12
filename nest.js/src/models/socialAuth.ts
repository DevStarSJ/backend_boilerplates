import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, DeleteDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import { ObjectType, Field, ID } from '@nestjs/graphql'
import { User } from './user'

@ObjectType()
@Entity('social_auths')
export class SocialAuth extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  public id: number

  @Field(() => ID, { nullable: false })
  @Column({name: 'user_id', nullable: false})
  userId: number

  @Field()
  @Column()
  service: string

  @Field()
  @Column({name: 'service_id', nullable: false})
  serviceId: string
  
  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, user => user.socialAuths, { primary: true })
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

  constructor(userId: number, service: string, serviceId: string) {
    super()
    this.userId = userId
    this.service = service
    this.serviceId = serviceId
  }
}
