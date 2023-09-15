export function tid(id: string | undefined) {
  return id ? { [`data-testid`]: id } : undefined;
}
