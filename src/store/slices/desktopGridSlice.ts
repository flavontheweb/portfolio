import type { SetFn } from '@/types/setFn';

type DesktopGridState = {
  flow: 'free' | 'snap';
  files: {
    [fileSystemEntryId: string]: { x: number; y: number; col: number; row: number };
  };
};

export const gridSlice = (set: SetFn) => ({
  desktop: {
    flow: 'snap',
  } as DesktopGridState,

  setFlow: (flow: 'free' | 'snap') => {
    set((state: { desktop: DesktopGridState }) => {
      state.desktop.flow = flow;
    });
  },

  file: {
    setPosition: (fileSystemEntryId: string, x: number, y: number, col: number, row: number) => {
      set((state: { desktop: DesktopGridState }) => {
        state.desktop.files[fileSystemEntryId] = { x, y, col, row };
      });
    },
  },
});
