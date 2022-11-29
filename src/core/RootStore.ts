import { createFocusableStore, createStore, silentLoggerOptions } from "lenrix";
import { initialRootState } from "./RootState";

export const createRootStore = (initialState = initialRootState) => {
  const store = import.meta.env.TEST
    ? createStore(initialState, { logger: silentLoggerOptions })
    : import.meta.env.PROD
    ? createStore(initialState, {
        logger: {
          ...silentLoggerOptions,
          console: { ...silentLoggerOptions.console, error: true },
        },
      })
    : createFocusableStore(
        (state) => state || initialState,
        initialState,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      );
  return store;
};

export type RootStore = ReturnType<typeof createRootStore>;
