# Inventaire API

The design of this project is to reference the documentation of [inventaire's API](https://api.inventaire.io/). The documentation is based on [Swagger UI](https://github.com/swagger-api/swagger-ui/).


## How to update

1. Create your own fork of [inventaire/inventaire-api](https://github.com/inventaire/inventaire-api).
2. Update the documentation. You just need to create, modify or delete files in the `inv-spec` directory.
1. Share your changes by submitting a pull request.

### How to view
To view the documentation locally you need NodeJs v8 and Nginx, or Docker.

#### With NodeJs and Nginx

1. Install the dependencies: `npm install`
1. Build the documentation: `npm run build`
1. Copy the files to Nginx: `cp -r dist/* /usr/share/nginx/html`
1. Access the documentation through your browser at http://localhost.

- To delete the installed dependencies: `rm -rf node_modules`
- To delete the generated documentation: `rm -rf dist`

#### With Docker

1. Install the dependencies: `docker run -it --rm -u 'node' -v $(pwd):/data -w /data node:8 npm install`
1. Build the documentation: `docker run -it --rm -v $(pwd):/data -w /data node:8 npm run build`
1. Launch Nginx: `docker run --rm -it -p 80:80 -v $(pwd)/dist:/usr/share/nginx/html nginx`
1. Access the documentation through your browser at http://localhost.

- To delete the installed dependencies: `rm -rf node_modules`
- To delete the generated documentation: `docker run -it --rm -v $(pwd):/data -w /data node:8 rm -rf /data/dist`

