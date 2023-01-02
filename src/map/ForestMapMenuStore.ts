import { RootStore } from "../core/RootStore";

export const createForestMapMenuStore = (rootStore: RootStore) =>
  rootStore
    .focusPath("menu")
    .actionTypes<{ toggleMenuVisibility: void }>()
    .updates((_) => ({
      toggleMenuVisibility: () =>
        _.focusPath("visible").update((visible) => !visible),
    }));

export type ForestMapMenuStore = ReturnType<typeof createForestMapMenuStore>;
