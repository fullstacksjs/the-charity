interface Props {
  children: React.ReactNode;
}

export const TableHead = ({ children }: Props) => {
  return <th>{children}</th>;
};
