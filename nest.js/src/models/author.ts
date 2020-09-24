import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Book from './book'

@ObjectType()
@Entity('authors')
export default class Author extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: string

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date

  @CreateDateColumn({name: 'updated_at'})
  updatedAt: Date

  @Field(() => [Book], { nullable: true })
  @OneToMany(() => Book, book => book.author)
  books: Promise<Book[]>
}