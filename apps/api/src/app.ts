import express, { Express, Application } from 'express';

import * as mongoDB from 'src/config/mongoDB';
import routes from 'src/routes';

export default (): Application => {
  const app: Express = express();

  setUpDatabases();
  mountRoutes(app);

  return app;
};

const setUpDatabases = async () => {
  try {
    await mongoDB.connect();
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error(`❌ Failed MongoDB connection\n${error}`);
  }
};

const mountRoutes = (app: Application) => {
  app.use(routes);
};
