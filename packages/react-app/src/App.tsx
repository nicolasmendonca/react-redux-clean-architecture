import * as React from "react";
import { Provider } from "react-redux";
import { createStore, createFetchUserTasksService } from "@app/core";
import { userTasksFetchRepository } from "@app/repositories";
import { StoreType } from "./reduxStore";

import { TaskCreator } from "./TaskCreator";
import { TaskList } from "./TaskList";
import "./styles.css";

export const store = createStore({
  fetchUserTasksService: createFetchUserTasksService(userTasksFetchRepository),
});

const App: React.FC<{ store: StoreType }> = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskCreator />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;