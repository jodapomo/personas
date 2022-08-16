import { Router } from 'express';

import { getAppHealthCheck } from 'shared/helpers/healthCheck';

const router = Router();

router.route('/').get(getAppHealthCheck);

export default router;
