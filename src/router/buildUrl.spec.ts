import { describe, expect, it } from 'vitest';

import { buildUrl } from './buildUrl';

describe('buildUrl', () => {
  it('should return url if params is undefined', () => {
    expect(buildUrl('/')).toBe('/');
  });

  it('should add params if param key is available', () => {
    expect(buildUrl('/:id', { id: 'hello' })).toBe('/hello');
  });

  it('should add params for multiple keys if they are available', () => {
    expect(buildUrl('/:id/:id2', { id: 'hello', id2: 'bye' })).toBe(
      '/hello/bye',
    );

    expect(buildUrl('/:id2/:id', { id: 'id', id2: 'id2' })).toBe('/id2/id');
  });

  it('should return placeholder itself if params is missing', () => {
    expect(buildUrl('/:id2/:id', { id: 'hello' })).toBe('/:id2/hello');

    expect(buildUrl('/:id2/:id', { id: 'id', id2: 'id2' })).toBe('/id2/id');
  });

  it('should throw error if params placeholder is not available in url', () => {
    expect(() => buildUrl('/', { id: 'hello' })).toThrow();
  });

  it('should throw if there are duplicated placeholders', () => {
    expect(() => buildUrl('/:id/:id', { id: 'hello' })).toThrow();
  });
});
