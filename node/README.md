# node-server

## TypeORM Migration

### Make New Table
1. make entity (user.ts)
2. yarn typeorm migration:generate -n createUser
3. tsc
4. yarn typeorm migration:run

### Alter Table
1. yarn typeorm migration:generate -n alterUser
2. edit migration file
3. tsc
4. yarn typeorm migration:run
