import { create } from 'zustand';
import { gridSlice } from './slices/foldersGridSlice';
import { runningAppsSlice } from './slices/runningAppsSlice';

const useStore = create((set) => ({
  ...runningAppsSlice(set),
  ...gridSlice(set),
}));

export default useStore;
