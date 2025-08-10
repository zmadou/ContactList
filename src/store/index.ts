import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    // foi osso, sofri d+ com esse projeto...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
