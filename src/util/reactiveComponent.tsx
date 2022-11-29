import { state, useStateObservable } from "@react-rxjs/core";
import React from "react";
import { Observable } from "rxjs";

export function reactiveComponent<Props>(
  props$: Observable<Props>,
  Component: React.FC<Props>
): React.FC<{}> {
  const state$ = state(props$, null);
  return () => {
    const props = useStateObservable(state$);
    if (props === null) return null;
    return <Component {...(props as any)} />;
  };
}
