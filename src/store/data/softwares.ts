import type { Software } from '@/types/software';
import { createDate } from '@/utils/dateUtils';

const softwares: Software[] = [
  {
    id: 'file-system',
    name: 'File System',
    version: '1.0.0',
    icon: 'file-system.svg',
    description: 'File System application.',
    installDate: createDate(2026, 11, 2),
    lastUpdateDate: createDate(2026, 11, 2),
  },
];

export default softwares;
