import {Router} from 'express';
import { CreateTaskController } from '../controllers';

const TaskRouter = Router();

const createTaskController = new CreateTaskController();


TaskRouter.post('/', createTaskController.handle);


export default TaskRouter;
