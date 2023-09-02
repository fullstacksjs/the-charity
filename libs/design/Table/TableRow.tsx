interface Props extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export const TableRow = ({ children, ...rest }: Props) => {
  return <tr {...rest}>{children}</tr>;
};
