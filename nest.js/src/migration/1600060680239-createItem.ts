import {MigrationInterface, QueryRunner} from 'typeorm'

export class createItem1600060680239 implements MigrationInterface {
  name = 'createItem1600060680239'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE items (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      price int NOT NULL,
      user_id int,
      created_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
      updated_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      UNIQUE INDEX IDX_UNIQUE_items_name (name),
      PRIMARY KEY (id)
    ) ENGINE=InnoDB`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX `IDX_UNIQUE_items_name` ON `items`')
    await queryRunner.query('DROP TABLE `items`')
  }
}
