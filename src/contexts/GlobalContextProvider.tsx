import { CreateFamilyModalStateCtxProvider } from './CreateFamilyModalStateCtx';

interface Props {
  children: JSX.Element;
}

export const GlobalContextProvider = ({ children }: Props) => {
  return (
    <CreateFamilyModalStateCtxProvider>
      {children}
    </CreateFamilyModalStateCtxProvider>
  );
};
