import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class createForDataloaderTest1600674685133 implements MigrationInterface {

  private authorTable = new Table({
    name: 'authors',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      }],
  });

  private bookTable = new Table({
    name: 'books',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isUnique: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'title',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'author_id',
        type: 'INTEGER',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      }],
  });

  private foreignKey = new TableForeignKey({
    columnNames: ['author_id'],
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
    referencedTableName: 'authors',
  });

  private genreTable = new Table({
    name: 'genres',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isUnique: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'genre_name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      }],
  });

  private genreBookTable = new Table({
    name: 'books_genres',
    columns: [
      {
        name: 'id',
        type: 'INTEGER',
        isPrimary: true,
        isUnique: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'book_id',
        type: 'INTEGER',
        isNullable: true,
      },
      {
        name: 'genre_id',
        type: 'INTEGER',
        isNullable: true,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        isPrimary: false,
        isNullable: false,
        default: 'CURRENT_TIMESTAMP',
      }],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.authorTable)
    await queryRunner.createTable(this.bookTable)
    await queryRunner.createForeignKey('books', this.foreignKey)
    await queryRunner.createTable(this.genreTable)
    await queryRunner.createTable(this.genreBookTable)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.authorTable)
    await queryRunner.dropTable(this.bookTable)
    await queryRunner.dropTable(this.genreTable)
    await queryRunner.dropTable(this.genreBookTable)
  }
}
