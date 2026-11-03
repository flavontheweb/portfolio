import type { SetFn } from '@/types/setFn';
import type { SortConfig } from '@/types/sort';

type FolderGridState = {
  [folderId: string]: {
    flow: 'free' | 'snap';
    sort: SortConfig;
    files: {
      [fileSystemEntryId: string]: { index: number; x: number; y: number };
    };
  };
};

const DEFAULT_SORT: SortConfig = { key: 'name', direction: 'asc' };

export const gridSlice = (set: SetFn) => ({
  folders: {} as FolderGridState,

  setFlow: (folderId: string, flow: 'free' | 'snap') => {
    set((state: { folders: FolderGridState }) => {
      if (!state.folders[folderId]) {
        state.folders[folderId] = { flow, sort: DEFAULT_SORT, files: {} };
      } else {
        state.folders[folderId].flow = flow;
      }
    });
  },

  file: {
    setPosition: (folderId: string, fileSystemEntryId: string, x: number, y: number) => {
      set((state: { folders: FolderGridState }) => {
        if (!state.folders[folderId]) {
          state.folders[folderId] = { flow: 'free', sort: DEFAULT_SORT, files: {} };
        }
        const currentFile = state.folders[folderId].files[fileSystemEntryId];
        const currentIndex = currentFile
          ? currentFile.index
          : Object.keys(state.folders[folderId].files).length;
        state.folders[folderId].files[fileSystemEntryId] = { index: currentIndex, x, y };
      });
    },
  },
});
