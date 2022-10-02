export const clientSideResolvers = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Mutation: {
    createDraftFamily: (root: any, variables: any) => {
      return {
        id: 'ID:SD12j4ljc213l4j=',
        name: variables.name,
      };
    },
  },
};
