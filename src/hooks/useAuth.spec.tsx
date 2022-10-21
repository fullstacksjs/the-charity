import { isNull } from '@fullstacksjs/toolbox';
import { renderHook } from '@testing-library/react-hooks';
import { describe, expect } from 'vitest';

import { AuthCtx } from '../contexts/AuthCtx';
import { ClientCookie } from '../domain';
import { useAuth } from './useAuth';

describe('useAuth', () => {
  it('should throw if auth context provider is not present', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.error).not.toSatisfy(isNull);
  });

  it('should return auth context data', () => {
    const ctx = { isAuth: true };
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <AuthCtx.Provider value={ctx}>{children}</AuthCtx.Provider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.error).toEqual(undefined);
    expect(result.current).toSatisfy(v => ClientCookie.guard(v));
    expect(result.current).toStrictEqual(ctx);
  });
});
