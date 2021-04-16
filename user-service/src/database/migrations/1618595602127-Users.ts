import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class User1618595602127 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            isPrimary: true,
            length: "36",
            name: "id",
            type: "char",
          },
          {
            length: "25",
            name: "username",
            type: "varchar",
          },
          {
            length: "320",
            name: "email",
            type: "varchar",
          },
          {
            default: "now()",
            name: "createdAt",
            type: "timestamp",
          },
        ],
      })
    );

    await queryRunner.createIndex(
      "user",
      new TableIndex({
        name: "IDX_UNQ_USERNAME",
        columnNames: ["username"],
      })
    );
    await queryRunner.createIndex(
      "user",
      new TableIndex({
        name: "IDX_UNQ_EMAIL",
        columnNames: ["email"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
