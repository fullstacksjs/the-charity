import { z } from 'zod';

export const Schema = {
  dob: () => z.date().max(new Date()),
};
