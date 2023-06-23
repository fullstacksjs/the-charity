import type { Nullish } from '@fullstacksjs/toolbox';

export const toDate = (d: Nullish | string) => (d ? new Date(d) : undefined);
export const toApiDate = (d: Date): string => d.toISOString().split('T')[0]!;
