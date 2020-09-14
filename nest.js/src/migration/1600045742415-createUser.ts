import {MigrationInterface, QueryRunner} from 'typeorm'

export class createUser1600045742415 implements MigrationInterface {
  name = 'createUser1600045742415'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE users (
      id int NOT NULL AUTO_INCREMENT,
      username varchar(255) NOT NULL,
      password varchar(255) NOT NULL,
      created_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
      updated_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
      UNIQUE INDEX IDX_UNIQUE_users_username (username), PRIMARY KEY (id)
    ) ENGINE=InnoDB`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX `IDX_UNIQUE_users_username` ON `users`')
    await queryRunner.query('DROP TABLE `users`')
  }
}
