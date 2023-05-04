export const toApiDate = (d: Date): string => d.toISOString().split('T')[0]!;
