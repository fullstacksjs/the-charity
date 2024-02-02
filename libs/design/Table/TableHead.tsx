interface Props extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const TableHead = (props: Props) => {
  return <th {...props} />;
};
