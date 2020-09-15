import {
  createUserTasksService,
  tasksActions,
  tasksSelectors,
  createStore,
} from "../core";
import { userTasksAPIRepository } from "../repositories/userTasksAxios";

const store = createStore({
  fetchUserTasksService: createUserTasksService(userTasksAPIRepository),
});

async function main() {
  await store.dispatch(tasksActions.fetchUserTasks(1));
  const task = tasksSelectors.selectById(store.getState().tasks, 1);
  console.warn(task);

  store.dispatch(
    tasksActions.toggleTaskCompleted({
      taskId: 1,
      completed: true,
    })
  );

  const updatedTask = tasksSelectors.selectById(store.getState().tasks, 1);
  console.warn(updatedTask);
}

main();