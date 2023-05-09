import { describe, expect, it, vi } from 'vitest';

import type { Logger, LogLevel } from './Debug';
import { Debug, DebugScopes } from './Debug';

let stubLogger: Logger;
const style = 'style';

const createDebug = (logLevel: LogLevel, scopes: string[] = ['Test']) =>
  new Debug(stubLogger, logLevel, scopes, style);

describe('Debug', () => {
  beforeEach(() => {
    stubLogger = {
      log: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
    };
  });

  describe('trace', () => {
    it('it should call internal log function when log level is trace', () => {
      const debug = createDebug('trace');
      debug.trace('Test', 1, 2);

      expect(stubLogger.log).toBeCalledWith('%cTest', style, 1, 2);
    });

    it('it should NOT call internal log function when log level is info', () => {
      const debug = createDebug('info');
      debug.trace('Test', 1, 2);

      expect(stubLogger.log).not.toBeCalled();
    });

    it('it should NOT call internal log function when log level is warn', () => {
      const debug = createDebug('warn');
      debug.trace('Test', 1, 2);

      expect(stubLogger.log).not.toBeCalled();
    });

    it('it should NOT call internal log function when log level is error', () => {
      const debug = createDebug('error');
      debug.trace('Test', 1, 2);

      expect(stubLogger.log).not.toBeCalled();
    });

    it('it should NOT call internal log function when log level is silent', () => {
      const debug = createDebug('silent');
      debug.trace('Test', 1, 2);

      expect(stubLogger.log).not.toBeCalled();
    });

    it('it should call internal log function when scope is included', () => {
      const debug = createDebug('trace', ['Test2', 'Test3']);
      debug.trace('Test2', 1, 2);

      expect(stubLogger.log).toBeCalledWith('%cTest2', style, 1, 2);
    });

    it('it should NOT call internal log function when scope is not included', () => {
      const debug = createDebug('trace', ['Test', 'Test3']);
      debug.trace('Test2', 1, 2);

      expect(stubLogger.log).not.toBeCalled();
    });

    it('it should call internal log function when the scope is All even if it is not included', () => {
      const debug = createDebug('trace', ['Test', 'Test3']);
      debug.trace(DebugScopes.All, 1, 2);

      expect(stubLogger.log).toBeCalledWith(
        `%c${DebugScopes.All}`,
        style,
        1,
        2,
      );
    });
  });

  describe('log', () => {
    it('it should call internal log function when log level is trace', () => {
      const debug = createDebug('trace');
      debug.log('Test', 1, 2);

      expect(stubLogger.log).toBeCalledWith('%cTest', style, 1, 2);
    });

    it('it should call internal log function when log level is info', () => {
      const debug = createDebug('info');
      debug.log('Test', 1, 2);

      expect(stubLogger.log).toBeCalledWith('%cTest', style, 1, 2);
    });

    it('it should NOT call internal log function when log level is warn', () => {
      const debug = createDebug('warn');
      debug.log('Test', 1, 2);

      expect(stubLogger.log).not.toBeCalled();
    });

    it('it should NOT call internal log function when log level is error', () => {
      const debug = createDebug('error');
      debug.log('Test', 1, 2);

      expect(stubLogger.log).not.toBeCalled();
    });

    it('it should NOT call internal log function when log level is silent', () => {
      const debug = createDebug('silent');
      debug.log('Test', 1, 2);

      expect(stubLogger.log).not.toBeCalled();
    });

    it('it should call internal log function when scope is included', () => {
      const debug = createDebug('trace', ['Test2', 'Test3']);
      debug.log('Test2', 1, 2);

      expect(stubLogger.log).toBeCalledWith('%cTest2', style, 1, 2);
    });

    it('it should NOT call internal log function when scope is not included', () => {
      const debug = createDebug('trace', ['Test', 'Test3']);
      debug.log('Test2', 1, 2);

      expect(stubLogger.log).not.toBeCalled();
    });

    it('it should call internal log function when the scope is All even if it is not included', () => {
      const debug = createDebug('trace', ['Test', 'Test3']);
      debug.log(DebugScopes.All, 1, 2);

      expect(stubLogger.log).toBeCalledWith(
        `%c${DebugScopes.All}`,
        style,
        1,
        2,
      );
    });
  });

  describe('warn', () => {
    it('it should call internal log function when log level is trace', () => {
      const debug = createDebug('trace');
      debug.warn(1, 2);

      expect(stubLogger.warn).toBeCalledWith(1, 2);
    });

    it('it should NOT call internal log function when log level is info', () => {
      const debug = createDebug('info');
      debug.warn(1, 2);

      expect(stubLogger.warn).toBeCalledWith(1, 2);
    });

    it('it should NOT call internal log function when log level is warn', () => {
      const debug = createDebug('warn');
      debug.warn(1, 2);

      expect(stubLogger.warn).toBeCalledWith(1, 2);
    });

    it('it should NOT call internal log function when log level is error', () => {
      const debug = createDebug('error');
      debug.warn(1, 2);

      expect(stubLogger.warn).not.toBeCalled();
    });

    it('it should NOT call internal log function when log level is silent', () => {
      const debug = createDebug('silent');
      debug.warn(1, 2);

      expect(stubLogger.warn).not.toBeCalled();
    });
  });

  describe('error', () => {
    it('it should call internal log function when log level is trace', () => {
      const debug = createDebug('trace');
      debug.error(1, 2);

      expect(stubLogger.error).toBeCalledWith(1, 2);
    });

    it('it should NOT call internal log function when log level is info', () => {
      const debug = createDebug('info');
      debug.error(1, 2);

      expect(stubLogger.error).toBeCalledWith(1, 2);
    });

    it('it should NOT call internal log function when log level is warn', () => {
      const debug = createDebug('warn');
      debug.error(1, 2);

      expect(stubLogger.error).toBeCalledWith(1, 2);
    });

    it('it should NOT call internal log function when log level is error', () => {
      const debug = createDebug('error');
      debug.error(1, 2);

      expect(stubLogger.error).toBeCalledWith(1, 2);
    });

    it('it should NOT call internal log function when log level is silent', () => {
      const debug = createDebug('silent');
      debug.error(1, 2);

      expect(stubLogger.error).not.toBeCalled();
    });
  });
});
