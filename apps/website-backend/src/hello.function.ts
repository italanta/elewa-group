import { https } from 'firebase-functions';

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
export const helloGet = https.onRequest((req: https.Request, res: any) => {
  res.send('Hello World!');
});
