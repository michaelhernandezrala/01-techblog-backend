process.chdir(__dirname);
const app = require('express')();

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const OpenApiValidator = require('express-openapi-validator');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const apiSpec = YAML.load(path.join(__dirname, 'api', 'swagger', 'api.yaml'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true, methods: 'GET,POST,PUT,DELETE' }));

// Some secure layer
app.use(helmet());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiSpec));
app.use(
  OpenApiValidator.middleware({
    apiSpec,
    validateRequests: true,
    validateResponses: true,
    operationHandlers: path.join(__dirname, 'api', 'controllers'),
  })
);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
