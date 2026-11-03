import type { SetFn } from '@/types/setFn';

interface DockItem {
  index: string;
  id: string;
}

const dockSlice = (set: SetFn) => ({
  dock: {
    items: [] as DockItem[],
  },

  addItem: (item: DockItem) => {
    set((state: { dock: { items: DockItem[] } }) => {
      state.dock.items.push(item);
    });
  },

  removeItem: (itemId: string) => {
    set((state: { dock: { items: DockItem[] } }) => {
      state.dock.items = state.dock.items.filter((item) => item.id !== itemId);
    });
  },
});

export default dockSlice;
