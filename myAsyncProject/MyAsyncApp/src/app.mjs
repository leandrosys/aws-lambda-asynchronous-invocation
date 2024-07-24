/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

import someAsyncFunc from './module/asyncFoo.mjs';

export const handler = async (event, context) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  console.log('requestContext:', JSON.stringify(context, null, 2));
  const { body, resource } = event;
  if (resource === '/poc/sync') {
    return {
      statusCode: 200,
      body: JSON.stringify({
        response: 'Sync',
      }),
    };
  }
  const response = await someAsyncFunc(event);
  return response;
};
