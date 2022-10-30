import { describe, expect, it } from 'vitest';

import { concatPathLevels } from './Breadcrumbs';

// NOTE: I have no idea about testing this function :)

describe("concatenation of breadcrumbs items' path levels", () => {
  it('should be the same for one level', () => {
    const items = [{ path: '/level1', name: 'levelOne' }];
    const result = concatPathLevels(items);

    expect(result).toEqual(items);
  });

  it('should work correctly for two levels', () => {
    const items = [
      { path: '/level1', name: 'levelOne' },
      { path: '/level2', name: 'levelTwo' },
    ];

    const expectedResult = [
      { path: '/level1', name: 'levelOne' },
      { path: '/level1/level2', name: 'levelTwo' },
    ];

    const result = concatPathLevels(items);

    expect(result).toEqual(expectedResult);
  });

  it('should work correctly for three levels', () => {
    const items = [
      { path: '/level1', name: 'levelOne' },
      { path: '/level2', name: 'levelTwo' },
      { path: '/level3', name: 'levelThree' },
    ];

    const expectedResult = [
      { path: '/level1', name: 'levelOne' },
      { path: '/level1/level2', name: 'levelTwo' },
      { path: '/level1/level2/level3', name: 'levelThree' },
    ];

    const result = concatPathLevels(items);

    expect(result).toEqual(expectedResult);
  });
});
