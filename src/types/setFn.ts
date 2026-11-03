export type SetFn = {
  (partial: unknown, replace?: false | undefined): void;
  (state: unknown, replace: true): void;
};
