import { Router } from 'express';

import * as CreditController from 'controllers';

const CreditRouter = new Router();

CreditRouter.post('/credit-data', CreditController.getDataCredit);

export default CreditRouter;
