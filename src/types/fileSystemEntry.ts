import type { FileType } from './fileType';

export const ROOT_ENTRY = 'fgaujard';

interface EntryBase {
  id: string;
  parentId: string;
  name: string;
}

export type FileSystemEntry =
  | (EntryBase & {
      entryType: 'file';
      type: FileType;
      size: number;
    })
  | (EntryBase & {
      entryType: 'directory';
    })
  | (EntryBase & {
      entryType: 'appShortcut';
      appId: string;
    });
