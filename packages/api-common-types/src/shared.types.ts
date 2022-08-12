export interface AppHealthResBody {
  app: string;
  version: string;
  mongoDb: {
    ok: boolean;
    status: string;
    version: string;
  };
}
