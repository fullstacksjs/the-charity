interface Props {
  children: React.ReactNode;
}

export const TableHeader = ({ children }: Props) => {
  return <thead>{children}</thead>;
};
