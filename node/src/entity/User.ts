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


/*

import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1593410722984 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE users (
            id int(11) PRIMARY KEY AUTO_INCREMENT,
            username varchar(255) NOT NULL,
            password varchar(255) NOT NULL,
            created_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
            updated_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
          )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users if exists`);
    }
}

*/