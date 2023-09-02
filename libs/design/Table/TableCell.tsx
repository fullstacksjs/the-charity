interface Props {
  children: React.ReactNode;
}

export const TableCell = ({ children }: Props) => {
  return <td>{children}</td>;
};
