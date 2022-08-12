import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { AppHealthResBody } from 'api-common-types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('src/../package.json');

const OK_STATUS = 'connected';
const NO_VERSION = 'undetermined';

interface MongoDBHealth {
  status: string;
  version: string;
}

export const getMongoDBHealth = async (): Promise<MongoDBHealth> => {
  const status = mongoose.STATES[mongoose.connection.readyState];
  let version = NO_VERSION;

  if (status === OK_STATUS) {
    ({ version } = await mongoose.connection.db.command({ buildInfo: 1 }));
  }

  return {
    status,
    version,
  };
};

export const getAppHealthCheck = async (req: Request, res: Response<AppHealthResBody>) => {
  const { status: mongoStatus, version: mongoVersion } = await getMongoDBHealth();

  const status = {
    mongoDb: {
      ok: mongoStatus === OK_STATUS,
      status: mongoStatus,
      version: mongoVersion,
    },
  };

  res.status(200).json({
    app: 'Personas API',
    version,
    ...status,
  });
};
