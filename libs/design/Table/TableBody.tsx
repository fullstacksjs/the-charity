interface Props {
  children: React.ReactNode;
}

export const TableBody = ({ children }: Props) => {
  return <tbody>{children}</tbody>;
};
