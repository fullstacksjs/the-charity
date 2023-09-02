interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const TableBody = ({ children, ...rest }: Props) => {
  return <tbody {...rest}>{children}</tbody>;
};
