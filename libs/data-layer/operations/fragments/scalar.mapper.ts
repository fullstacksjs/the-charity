import type { Nullable } from '@fullstacksjs/toolbox';

export const toDate = (d: Nullable<string>) => (d ? new Date(d) : undefined);
export const toApiDate = (d: Date): string => d.toISOString().split('T')[0]!;
