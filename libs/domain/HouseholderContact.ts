import { z } from 'zod';

import { Schema } from './Schema';

export const householderContactSchema = {
  province: () => Schema.province().optionalString(),
  city: () => Schema.city().optionalString(),
  neighborhood: () => Schema.neighborhood().optionalString(),
  address: () => Schema.address().optionalString(),
  zipCode: () => Schema.zipCode().optionalString(),
  priorAccommodationAddress: () =>
    Schema.priorAccommodationAddress().optionalString(),
  accommodationType: () => Schema.accommodationType().optionalString(),
  description: () => z.string().optionalString(),
};
