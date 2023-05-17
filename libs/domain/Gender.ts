export const Gender = {
  Male: 'male',
  Female: 'female',
  Unknown: 'unknown',
} as const;
export const genders = Object.values(Gender);

export type Gender = (typeof Gender)[keyof typeof Gender];
