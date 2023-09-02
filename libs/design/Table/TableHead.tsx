interface Props extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children: React.ReactNode;
}

export const TableHead = ({ children, ...rest }: Props) => {
  return <th {...rest}>{children}</th>;
};
