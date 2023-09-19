interface Props extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  children: React.ReactNode;
}

export const TableCell = (props: Props) => {
  return <td {...props} />;
};
