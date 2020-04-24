# Inventaire API

This repository is used to generate [inventaire's API](https://api.inventaire.io/), [inventaire.io](https://inventaire.io) API documentation. The documentation UI is based on [Swagger UI](https://github.com/swagger-api/swagger-ui/).

## Help improve the documentation

Until we [find an elegant way to generate the documentation automatically](https://github.com/inventaire/inventaire/issues/385), the API documentation is being maintained manually. For this reason, it is currently often out-of-date. Your help to maintain it up-to-date is thus very welcome. To contribute to this effort, you can follow those steps:

1. Fork the repository [inventaire/inventaire-api](https://github.com/inventaire/inventaire-api).
2. Update the documentation: you just need to create, modify or delete files in the `inv-spec` directory.
3. Share your changes by submitting a pull request.

### How to view
To view the documentation locally you need NodeJS v8 and an HTTP file server, or Docker.

#### With NodeJS v8
0. If you installed Node with [nvm](https://github.com/creationix/nvm), you can temporarly (just for the present terminal session) switch to NodeJS v8 by running `nvm use 8`
1. Install the dependencies: `npm install`
2. Build the documentation: `npm run build`
3. Start the file server: `npm run start`

- To update the documentation UI: `npm run build`
- To update just the API specs: `npm run update-spec`
- To update just the API specs on every file change: `npm run watch-spec`

#### With Docker
If you don't want to install NodeJS on your machine, you can use it in a Docker container

1. Install the dependencies: `docker run -it --rm -u 'node' -v $(pwd):/data -w /data node:8 npm install`
2. Build the documentation: `docker run -it --rm -v $(pwd):/data -w /data node:8 npm run build`
3. Launch a file web server: `cd dist && python -m SimpleHTTPServer`
4. Access the documentation through your browser at http://localhost:8080.

- To update the UI: `docker run -it --rm -v $(pwd):/data -w /data node:8 npm run build`
- To update the API specs alone: `docker run -it --rm -v $(pwd):/data -w /data node npm run update-spec`
- To delete the installed dependencies: `rm -rf ./node_modules`
- To delete the generated documentation: `rm -rf ./dist`
