<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Scripts(NestJS, Prisma, GraphQL)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# Build Postgres Container(Docker)
$ docker compose up -d

# Run Prisma migration
$ npx prisma migrate dev --name [name]

# Open Prisma web tool
$ npx prisma studio

#Generate Module
$ nest g module [Model]

#Generate Resolver
$ nest g resolver [Model] --no-spec

#Generate Service
$ nest g service [Model] --no-spec
```

## GraphQL Playgraound
[localhost:3000/graphql](localhost:3000/graphql)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
