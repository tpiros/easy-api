const restify = require('restify');
const routes = require('./routes');

const corsMiddleware = require('restify-cors-middleware');
const port = 3000;

const server = restify.createServer();

const cors = corsMiddleware({
  origins: ['*'],
});

server.use(restify.plugins.bodyParser());
server.pre(cors.preflight);
server.use(cors.actual);

server.get('/api/products', routes.getProducts);
server.get('/api/products/:id', routes.getProduct);
server.post('/api/products', routes.addProduct);
server.put('/api/products/:id', routes.updateProduct);
server.del('/api/products/:id', routes.deleteProduct);

server.listen(port, () => console.info(`Server is up on ${port}.`));