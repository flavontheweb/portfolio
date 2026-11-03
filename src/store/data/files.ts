import type { FileSystemEntry } from '@/types/fileSystemEntry';

const files: FileSystemEntry[] = [
  {
    id: 'public',
    parentId: 'fgaujard',
    name: 'Public',
    entryType: 'directory',
  },
  {
    id: 'desktop',
    parentId: 'fgaujard',
    name: 'Desktop',
    entryType: 'directory',
  },
  {
    id: 'documents',
    parentId: 'fgaujard',
    name: 'Documents',
    entryType: 'directory',
  },
  {
    id: 'photos',
    parentId: 'fgaujard',
    name: 'Photos',
    entryType: 'directory',
  },
  {
    id: 'music',
    parentId: 'fgaujard',
    name: 'Music',
    entryType: 'directory',
  },
  {
    id: 'downloads',
    parentId: 'fgaujard',
    name: 'Downloads',
    entryType: 'directory',
  },
  {
    id: 'bin',
    parentId: 'fgaujard',
    name: 'Bin',
    entryType: 'directory',
  },
  {
    id: 'softwares',
    parentId: 'fgaujard',
    name: 'Softwares',
    entryType: 'directory',
  },
  {
    id: 'projects',
    parentId: 'desktop',
    name: 'Projects',
    entryType: 'directory',
  },
];

export default files;
