import { createStyles, TextInput as MantineTextInput } from '@mantine/core';

export interface InputProps {
  label: string;
  placeholder: string;
  description?: string;
  error?: string;
  withAsterisk: boolean;
}

const useStyles = createStyles(theme => ({
  textInput: {
    label: {
      color: theme.colors.fgSubtle[6],
    },
  },
}));

export const TextInput = ({
  label,
  placeholder,
  description,
  error,
  withAsterisk,
}: InputProps) => {
  const { classes } = useStyles();

  return (
    <MantineTextInput
      className={classes.textInput}
      description={description}
      placeholder={placeholder}
      label={`${label}:`}
      error={error}
      withAsterisk={withAsterisk}
    />
  );
};
