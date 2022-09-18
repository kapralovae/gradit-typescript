import { Express } from 'express-serve-static-core';
import { initOrdersRouter } from './orders/orders';

const routeInits = [initOrdersRouter];

const initCustomRoutes = (server: Express) => {
  routeInits.forEach((routeInit) => routeInit(server));
};

export{initCustomRoutes };
