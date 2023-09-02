interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const TableHeader = ({ children, ...rest }: Props) => {
  return <thead {...rest}> {children}</thead>;
};
