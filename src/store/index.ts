import { configureStore } from "@reduxjs/toolkit";
// import tarefasReducer from "../features/tarefas/tarefasSlice";

const store = configureStore({
  reducer: {
    // tarefas: tarefasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
