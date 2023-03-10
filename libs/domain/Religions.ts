export const religions = ['islam'] as const;
export type Religion = (typeof religions)[number];
