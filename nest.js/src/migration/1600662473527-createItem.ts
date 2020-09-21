import { createTable } from '../utils/typeormMigrationHelper'
import {MigrationInterface, QueryRunner} from 'typeorm'

export class createItem1600662473527 implements MigrationInterface {

    private itemsTable = createTable('items',
      [
        { name: 'name', type: 'VARCHAR', length: '255', isNullable: false, },
        { name: 'price', type: 'INT', },
        { name: 'user_id', type: 'INT', },
      ],
      [{ name: 'idx_items_user_id', columnNames: ['user_id'] }],
      [{ name: 'idx_items_unique_name', columnNames: ['user_id', 'name'] }]
    )

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(this.itemsTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(this.itemsTable)
    }

}
