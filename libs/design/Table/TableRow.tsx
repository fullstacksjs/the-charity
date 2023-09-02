interface Props {
  children: React.ReactNode;
}

export const TableRow = ({ children }: Props) => {
  return <tr>{children}</tr>;
};
