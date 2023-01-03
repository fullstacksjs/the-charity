export function createTestAttr(id: string | undefined) {
  return id ? { [`data-testid`]: id } : undefined;
}
