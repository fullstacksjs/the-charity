interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const TableHeader = (props: Props) => {
  return <thead {...props} />;
};
