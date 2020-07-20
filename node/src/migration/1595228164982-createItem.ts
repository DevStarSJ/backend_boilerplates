import {MigrationInterface, QueryRunner} from "typeorm";

export class createItem1595228164982 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE items (
            id int(11) PRIMARY KEY AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            price int(11),
            user_id int(11),
            created_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
            updated_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
          );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `items` if exists");
    }

}
