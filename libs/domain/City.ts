export const City = { Tehran: 'tehran', Unknown: 'unknown' } as const;
export const cities = Object.values(City);

export type City = (typeof City)[keyof typeof City];
