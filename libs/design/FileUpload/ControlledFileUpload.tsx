import { useEffect, useState } from 'react';
import type { Control, FieldValues, Path, PathValue } from 'react-hook-form';
import { useController } from 'react-hook-form';

import type { StorageFile } from './FileState';
import type { FileUploadProps } from './FileUpload';
import { FileUpload } from './FileUpload';

interface Props<T extends FieldValues> extends FileUploadProps {
  name: Path<T>;
  control: Control<T>;
  defaultValue: PathValue<T, Path<T>>;
}

export const ControlledFileUpload = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  ...fileUploadProps
}: Props<T>): JSX.Element => {
  const { field } = useController({ control, name });
  const [files, setFiles] = useState<StorageFile[]>([]);

  useEffect(() => {
    field.onChange({
      target: {
        value: files,
        name: field.name,
      },
    });
  }, [files]);

  return (
    <FileUpload
      onDelete={deletedDoc => {
        setFiles(fs => fs.filter(doc => doc.id !== deletedDoc.id));
      }}
      onAdd={remote => {
        setFiles(fs => [...fs, remote]);
      }}
      {...fileUploadProps}
    />
  );
};
