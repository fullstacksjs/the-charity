interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const TableBody = (props: Props) => {
  return <tbody {...props} />;
};
