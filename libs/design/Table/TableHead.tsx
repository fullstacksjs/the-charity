interface Props extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children: React.ReactNode;
}

export const TableHead = (props: Props) => {
  return <th {...props} />;
};
