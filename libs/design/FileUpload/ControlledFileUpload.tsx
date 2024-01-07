import type { Control, FieldValues, Path, PathValue } from 'react-hook-form';
import { Controller } from 'react-hook-form';

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
          onDelete={i => {
            // FIXME we should get the uploaded file here and set it
            if (Array.isArray(field.value))
              field.onChange({
                target: {
                  value: (field.value as any[]).filter(
                    (_, index) => i !== index,
                  ),
                  name: field.name,
                },
              });
          }}
          onAdd={file => {
            // FIXME we should get the uploaded file here and set it
            if (Array.isArray(field.value))
              field.onChange({
                target: {
                  value: [...field.value, file],
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
