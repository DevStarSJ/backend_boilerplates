import { MigrationInterface, QueryRunner } from 'typeorm'
import { createTable } from '../utils/typeormMigrationHelper'

export class createUser1600156182705 implements MigrationInterface {
    private usersTable = createTable('users',
      [
        { name: 'email', type: 'VARCHAR', length: '255', isNullable: false, },
        { name: 'password', type: 'VARCHAR', length: '255', isNullable: true, },
      ],
      [],
      [{ name: 'idx_users_unique_email', columnNames: ['email'] }]
    )

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(this.usersTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(this.usersTable) 
    }
}
