# Nest.JS Boilerplate



## TypeORM Migration

- 정상 flow만 yarn script로 생성하였다. 비정상 flow는 yarn typeorm으로 실행하자.
```
yarn migration:create -n createUser
yarn migration:run
yarn typeorm migration:revert
yarn typeorm schema:drop
```
- migration 코드는 raw sql를 직접사용하지 말고, typeorm 객체를 활용한다.
- `migration:generate` 기능은 사용하지 않는다. -> raw sql로 작성된다.
- migration에 code logic을 넣어서 data migration을 같이 작업하는 것도 가능하다.

## License

  Nest is [MIT licensed](LICENSE).
