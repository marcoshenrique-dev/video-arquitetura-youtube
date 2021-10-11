import { StoreTaskRepository } from "@tasks/infra/repositories";

class CreateTaskService {
  async execute(name: string) {
      const storeTaskRepository = new StoreTaskRepository();

      const task = storeTaskRepository.store(name);

      return task;
  }
}

export {CreateTaskService};
