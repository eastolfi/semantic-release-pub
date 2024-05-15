import { z } from "zod";

export const ServiceAccount = z.object({
  client_email: z.string(),
  private_key: z.string(),
});

export type ServiceAccount = z.infer<typeof ServiceAccount>;

export const Pubspec = z.object({
  name: z.string(),
  version: z.string(),
  msix_config: z.optional(
    z.object({
      msix_version: z.string(),
    }),
  ),
});

export type Pubspec = z.infer<typeof Pubspec>;
