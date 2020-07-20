import {getMetadataArgsStorage} from "routing-controllers";
import { routingControllersToSpec } from 'routing-controllers-openapi'
import { validationMetadatasToSchemas } from 'class-validator-jsonschema'
import { controllers } from './controller';

const schemas = validationMetadatasToSchemas({
  refPointerPrefix: '#/components/schemas/'
})

const routingControllersOptions = {
  controllers: controllers,
  // routePrefix: '/api'
}

const storage = getMetadataArgsStorage()
export const swaggerSpec = routingControllersToSpec(storage, routingControllersOptions, {
  components: {
    schemas,
    securitySchemes: {
      basicAuth: {
        scheme: 'bearer',
        type: 'http'
      }
    }
  },
  info: {
    description: 'Generated with `routing-controllers-openapi`',
    title: 'A sample API',
    version: '1.0.0'
  }
});
