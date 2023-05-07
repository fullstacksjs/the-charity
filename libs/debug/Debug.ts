/* eslint-disable @typescript-eslint/no-empty-function */
export type LogLevel = 'error' | 'info' | 'silent' | 'trace' | 'warn';

export interface Logger {
  log: (...data: unknown[]) => void;
  warn: (...data: unknown[]) => void;
  error: (...data: unknown[]) => void;
}

export enum DebugScopes {
  Householder = 'Householder',
  Auth = 'Auth',
  Breadcrumbs = 'Breadcrumbs',
  All = 'All',
}

export class Debug {
  constructor(
    private logger: Logger,
    private logLevel: LogLevel = 'silent',
    private scopes: (DebugScopes | string)[] = [],
    private style: string = '',
  ) {}

  trace() {}
  log(scope: DebugScopes | string, ...data: unknown[]) {
    if (
      this.logLevel === 'warn' ||
      this.logLevel === 'error' ||
      this.logLevel === 'silent'
    )
      return;

    if (!this.scopes.includes(scope) && scope !== DebugScopes.All) return;

    this.logger.log(`%c${scope}`, this.style, ...data);
  }

  warn() {}
  error() {}
}
