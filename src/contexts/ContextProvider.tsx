import { CreateFamilyModalStateCtxProvider } from './CreateFamilyModalStateCtx';

interface Props {
  children: JSX.Element;
}

export const ContextProvider = ({ children }: Props) => {
  return (
    <CreateFamilyModalStateCtxProvider>
      {children}
    </CreateFamilyModalStateCtxProvider>
  );
};
