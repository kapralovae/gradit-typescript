// const { ApiPath, HttpCode } = require('../../common/enums/enums');
// const { validateSchema } = require('../../middlewares/middlewares');

import { ApiPath } from "../../common/enums/api/api-path.enum";
import { HttpCode } from "../../common/enums/http/http-code.enum";
import { validateSchema } from "../../middlewares/validate-schema/validate-schema.middleware";
import { orderCreatePayload as orderCreatePayloadSchema } from '../../schemas/order/order-create-payload.schema'; //'../../schemas/schemas';

const initOrdersRouter = (server) => {
  server.post(
    ApiPath.ORDERS,
    validateSchema(orderCreatePayloadSchema),
    (_req, res) => {
      return res.status(HttpCode.CREATED).json(HttpCode.CREATED);
    },
  );
};

export {initOrdersRouter };
