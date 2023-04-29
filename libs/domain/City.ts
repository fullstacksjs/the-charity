export const City = { Tehran: 'tehran' } as const;
export const cities = Object.values(City);

export type City = (typeof City)[keyof typeof City];
