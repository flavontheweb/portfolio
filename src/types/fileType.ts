export const FileTypeEnum = {
  TXT: 'txt',
  PDF: 'pdf',
  IMG: 'img',
} as const;

export type FileType = (typeof FileTypeEnum)[keyof typeof FileTypeEnum];
