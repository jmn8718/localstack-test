# localstack-test

This repository is a test project of localstack with nodejs

## requirements

- nodejs
- docker
- docker-compose
- aws-cli

## setup

- To start **localstack** just execute `docker-compose up`.
- To install the node dependencies, execute `npm install`

### configuration

Starting localstack will have an empty environment, so we have to configure the different aws services before be able to use them.

We have to initialize the S@
`aws --endpoint-url=http://localhost:4566 s3 mb s3://demo-bucket`

`aws --endpoint-url=http://localhost:4566 s3api put-bucket-acl --bucket demo-bucket --acl public-read`

## test

In the folder [test](./test) we have the test files to test out application.

To run the tests, you have to run `npm test`.

To add new tests, you have to add a file in the `test` folder, with the name ending with `.test.js`, for example _s3.test.js_.

## resources

- [aws cli documentation](https://docs.aws.amazon.com/cli/index.html)
- [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) installation guide
- [localstack](https://github.com/localstack/localstack) repository