const dataAttrName = 'testid';

export function createTestAttr(id: string, type: 'data-' | 'id' = 'data-') {
  if (type === 'id') return { id };
  return { [`data-${dataAttrName}`]: id };
}
