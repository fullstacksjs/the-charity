interface Props extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  children: React.ReactNode;
}

export const TableCell = ({ children, ...rest }: Props) => {
  return <td {...rest}>{children}</td>;
};
