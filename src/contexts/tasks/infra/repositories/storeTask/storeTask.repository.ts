import { client } from "src/contexts/shared/database";

class StoreTaskRepository {
  async store(name: string) {
    const task = await client.task.create({
      data: {
        name
      }
    });

    return task;
  }
}

export {StoreTaskRepository};
