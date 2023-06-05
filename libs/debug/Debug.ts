import type { Tuple } from '@fullstacksjs/toolbox';

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

type DebugScope = DebugScopes | string;

export class Debug {
  private logOrder: Tuple<LogLevel, 5> = [
    'trace',
    'info',
    'warn',
    'error',
    'silent',
  ];

  constructor(
    private logger: Logger,
    private logLevel: LogLevel = 'silent',
    private scopes: DebugScope[] = [],
    private style: string = '',
  ) {}

  private isInLogLevel(level: LogLevel) {
    return this.logOrder.indexOf(this.logLevel) <= this.logOrder.indexOf(level);
  }

  private isInScope(scope: DebugScope) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    return this.scopes.includes(scope) || scope === DebugScopes.All;
  }

  private shouldLog(scope: DebugScope, level: LogLevel) {
    return this.isInLogLevel(level) && this.isInScope(scope);
  }

  trace(scope: DebugScope, ...data: unknown[]) {
    if (this.shouldLog(scope, 'trace'))
      this.logger.log(`%c${scope}`, this.style, ...data);
  }

  log(scope: DebugScope, ...data: unknown[]) {
    if (this.shouldLog(scope, 'info'))
      this.logger.log(`%c${scope}`, this.style, ...data);
  }

  warn(...data: unknown[]) {
    if (this.isInLogLevel('warn')) this.logger.warn(...data);
  }

  error(...data: unknown[]) {
    if (this.isInLogLevel('error')) this.logger.error(...data);
  }
}
