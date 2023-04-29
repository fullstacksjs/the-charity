export const Nationality = { Ir: 'ir' } as const;
export const nationalities = Object.values(Nationality);
export type Nationality = (typeof nationalities)[number];
