interface Props extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const TableCell = (props: Props) => {
  return <td {...props} />;
};
