import { createTable } from "src/utils/typeormMigrationHelper";
import {MigrationInterface, QueryRunner} from "typeorm";

export class createSocialAuth1602460368375 implements MigrationInterface {

  private socialAuthTable = createTable('social_auths',
    [
      { name: 'service', type: 'VARCHAR', length: '255', isNullable: false, },
      { name: 'service_id', type: 'VARCHAR', length: '255', isNullable: false, },
      { name: 'user_id', type: 'INT', isNullable: false, },
    ],
    [{ name: 'idx_social_auths_user_id_service', columnNames: ['user_id', 'service'] }],
  )

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.socialAuthTable)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.socialAuthTable)
  }
}
