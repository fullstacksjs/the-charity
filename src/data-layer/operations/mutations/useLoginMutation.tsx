export function useLoginMutation() {
  return [
    (_args: {
      variables: { input: { username: string; password: string } };
    }) => {
      return Promise.resolve();
    },
    { loading: false },
  ] as const;
}
