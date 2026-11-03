export type SortKey = 'name' | 'size' | 'creationDate' | 'lastEditDate';

export interface SortConfig {
  key: SortKey;
  direction: 'asc' | 'desc';
}
