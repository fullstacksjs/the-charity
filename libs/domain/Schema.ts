import { z } from 'zod';

export const Schema = {
  dob: () => z.date().max(new Date()),
  name: () =>
    z
      .string()
      .regex(
        /^[\u0600-\u06FF\u0750-\u077F\uFB50-\uFBC2\uFBD3-\uFD3D\uFD50-\uFDCF\uFDF0-\uFE4F\uFE70-\uFEFF]+$/,
      )
      .trim(),
};
