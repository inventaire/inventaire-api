# Inventaire API

This repository is used to generate [inventaire's API](https://api.inventaire.io/), [inventaire.io](https://inventaire.io) API documentation. The documentation UI is based on [Swagger UI](https://github.com/swagger-api/swagger-ui/).

## Help improve the documentation

Until we [find an elegant way to generate the documentation automatically](https://github.com/inventaire/inventaire/issues/385), the API documentation is being maintained manually. For this reason, it is currently often out-of-date. Your help to maintain it up-to-date is thus very welcome. To contribute to this effort, you can follow those steps:

1. Fork the repository [inventaire/inventaire-api](https://github.com/inventaire/inventaire-api).
2. Update the documentation: you just need to create, modify or delete files in the `inv-spec` directory.
3. Share your changes by submitting a pull request.

### How to view
To view the documentation locally you need NodeJS v8 and an HTTP file server.

0. If you installed Node with [nvm](https://github.com/creationix/nvm), you can temporarly (just for the present terminal session) switch to NodeJS v8 by running `nvm use 8`
1. Install the dependencies: `npm install`
2. Build the documentation: `npm run build`
3. Start the file server: `npm run start`

- To update the documentation UI: `npm run build`
- To update just the API specs: `npm run update-spec`
- To update just the API specs on every file change: `npm run watch-spec`
