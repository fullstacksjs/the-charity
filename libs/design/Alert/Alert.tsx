import { ErrorAlertIcon } from '@camp/icons';
import type {
  AlertStylesNames,
  AlertStylesParams,
  Styles,
} from '@mantine/core';
import { Alert as MantineAlert } from '@mantine/core';

interface AlertProps {
  type: 'error' | 'success' | 'warn';
  message: string;
}

const getStyles = (
  params: Pick<AlertProps, 'type'>,
): Styles<AlertStylesNames, AlertStylesParams> => {
  return theme => ({
    message: {
      color: params.type === 'error' ? theme.colors.errorDefault[6] : undefined,
      fontSize: 13,
    },
  });
};

export const Alert = ({ type, message }: AlertProps) => {
  return (
    <MantineAlert
      icon={type === 'error' ? <ErrorAlertIcon /> : undefined}
      color={type === 'error' ? 'red' : undefined}
      styles={getStyles({ type })}
    >
      {message}
    </MantineAlert>
  );
};
