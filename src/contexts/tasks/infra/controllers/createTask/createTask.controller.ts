import { CreateTaskService } from "@tasks/infra/services";
import { Request, Response } from "express";

class CreateTaskController {
  async handle(request: Request, response: Response){
    const {name} = request.body;

    const createTaskService = new CreateTaskService();

    const task = await createTaskService.execute(name);

    response.json(task);
  }
}

export {CreateTaskController}
