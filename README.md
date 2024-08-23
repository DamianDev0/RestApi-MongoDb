<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Config Database

```javascript
 imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dg997678:damian45d5@cluster0.lesbz.mongodb.net/jojiDb?retryWrites=true&w=majority&appName=Cluster0',
    ),]
```

Add your MongoDB database configuration so you can use this repository. You can find this configuration in the app.module.ts file.