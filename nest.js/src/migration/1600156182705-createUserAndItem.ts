import {MigrationInterface, QueryRunner} from 'typeorm'

export class createUserAndItem1600156182705 implements MigrationInterface {
    name = 'createUserAndItem1600156182705'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE `items` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `price` int NOT NULL, `user_id` int NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, UNIQUE INDEX `IDX_213736582899b3599acaade2cd` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB')
      await queryRunner.query('CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB')
      await queryRunner.query('ALTER TABLE `items` ADD CONSTRAINT `FK_3b934e62fb52bac909e0ddf5422` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `items` DROP FOREIGN KEY `FK_3b934e62fb52bac909e0ddf5422`')
      await queryRunner.query('DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`')
      await queryRunner.query('DROP TABLE `users`')
      await queryRunner.query('DROP INDEX `IDX_213736582899b3599acaade2cd` ON `items`')
      await queryRunner.query('DROP TABLE `items`')
    }

}
