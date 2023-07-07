import type { CyHttpMessages } from 'cypress/types/net-stubbing';

export const hasOperationName = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: string,
) => {
  return req.body?.operationName && req.body?.operationName === operationName;
};

export const aliasQuery = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: string,
  data: any,
) => {
  if (hasOperationName(req, operationName)) {
    req.alias = operationName;
    req.reply({ data });
  }
};

export const aliasMutation = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: string,
  data: any,
) => {
  if (hasOperationName(req, operationName)) {
    req.alias = operationName;
    req.reply({ data });
  }
};
