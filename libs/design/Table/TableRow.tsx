interface Props extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export const TableRow = (props: Props) => {
  return <tr {...props} />;
};
