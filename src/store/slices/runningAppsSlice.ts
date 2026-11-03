import type { SetFn } from '@/types/setFn';
import { v4 as uuidv4 } from 'uuid';

type RunningAppsState = {
  [processId: string]: {
    appId: string;
    window: {
      index: number;
      fullScreen: boolean;
      width: number;
      height: number;
      x: number;
      y: number;
    };
  };
};

export const runningAppsSlice = (set: SetFn) => ({
  runningApps: [],

  run: (appId: string) =>
    set((state: { runningApps: RunningAppsState }) => ({
      runningApps: {
        ...state.runningApps,
        [uuidv4()]: {
          appId,
          window: { index: 0, fullScreen: false, width: 800, height: 600, x: 0, y: 0 },
        },
      },
    })),
  closeInstance: (processId: string) =>
    set((state: { runningApps: RunningAppsState }) => {
      const runningApps = { ...state.runningApps };
      delete runningApps[processId];
      return { runningApps };
    }),
  closeInstances: (appId: string) =>
    set((state: { runningApps: RunningAppsState }) => ({
      runningApps: Object.fromEntries(
        Object.entries(state.runningApps).filter(([_, { appId: id }]) => id !== appId),
      ),
    })),

  window: {
    changeIndex: (processId: string, index: number) =>
      set((state: { runningApps: RunningAppsState }) => {
        const runningApps = { ...state.runningApps };
        if (runningApps[processId]) {
          runningApps[processId].window.index = index;
        }
        return { runningApps };
      }),
    toggleFullScreen: (processId: string) =>
      set((state: { runningApps: RunningAppsState }) => {
        const runningApps = { ...state.runningApps };
        if (runningApps[processId]) {
          runningApps[processId].window.fullScreen = !runningApps[processId].window.fullScreen;
        }
        return { runningApps };
      }),
    resize: (processId: string, width: number, height: number) =>
      set((state: { runningApps: RunningAppsState }) => {
        const runningApps = { ...state.runningApps };
        if (runningApps[processId]) {
          runningApps[processId].window.width = width;
          runningApps[processId].window.height = height;
        }
        return { runningApps };
      }),
    move: (processId: string, x: number, y: number) =>
      set((state: { runningApps: RunningAppsState }) => {
        const runningApps = { ...state.runningApps };
        if (runningApps[processId]) {
          runningApps[processId].window.x = x;
          runningApps[processId].window.y = y;
        }
        return { runningApps };
      }),
  },
});
