import type { Control, FieldValues, Path, PathValue } from 'react-hook-form';
import { Controller } from 'react-hook-form';

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
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FileUpload
          onDelete={deletedDoc => {
            if (Array.isArray(field.value))
              field.onChange({
                target: {
                  value: (field.value as StorageFile[]).filter(
                    doc => doc.id !== deletedDoc.id,
                  ),
                  name: field.name,
                },
              });
          }}
          onAdd={remote => {
            if (Array.isArray(field.value))
              field.onChange({
                target: {
                  value: [...field.value, remote],
                  name: field.name,
                },
              });
          }}
          {...fileUploadProps}
          {...field}
        />
      )}
    />
  );
};
