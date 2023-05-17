export const Nationality = { Ir: 'ir', Unknown: 'unknown' } as const;
export const nationalities = Object.values(Nationality);
export type Nationality = (typeof nationalities)[number];
