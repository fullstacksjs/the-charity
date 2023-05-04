export const Religion = { Islam: 'islam' } as const;
export const religions = Object.values(Religion);
export type Religion = (typeof Religion)[keyof typeof Religion];
