import { Router } from 'express';

import { getAppHealthCheck } from 'shared/helpers/healthCheck.helper';

const router = Router();

router.route('/').get(getAppHealthCheck);

export default router;
