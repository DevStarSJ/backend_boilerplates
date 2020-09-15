import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, BaseEntity, DeleteDateColumn } from 'typeorm'
import { User } from './user'
import { ItemInput } from 'src/inputs/itemInput'

@Entity('items')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({unique: true})
  public name: string

  @Column()
  public price: number

  @Column({name: 'user_id', nullable: true})
  userId: number

  @ManyToOne(type => User, user => user.items)
  @JoinColumn({ name: 'user_id' })
  user?: User

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  public createdAt: Date

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
