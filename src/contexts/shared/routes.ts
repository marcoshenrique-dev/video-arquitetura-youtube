import TaskRouter from '@tasks/infra/routes/index.routes';
import {Router} from 'express';


const routes = Router();

routes.use('/tasks', TaskRouter);


export default routes;
