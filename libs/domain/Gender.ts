export const genders = ['male', 'female'] as const;
export type Gender = (typeof genders)[number];
