import { Table } from 'typeorm'

const id = [{ name: 'id', type: 'INT', isPrimary: true, isGenerated: true, generationStrategy: 'increment', }]
const dates: any[] = [
  { name: 'created_at', type: 'TIMESTAMP', default: 'CURRENT_TIMESTAMP', },
  { name: 'updated_at', type: 'TIMESTAMP', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', },
  { name: 'deleted_at', type: 'TIMESTAMP', isNullable: true, },
]

export function createTable(name: string, columnsToAdd: any[], indices?: any[], uniques?: any[]) {
  const columns: any[] = id.concat(columnsToAdd, dates)

  return new Table({name, columns, indices, uniques})
}
