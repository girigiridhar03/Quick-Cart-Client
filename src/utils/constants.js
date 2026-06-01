import { z } from "zod";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const REFRESH_BEFORE_MS = 2 * 60 * 1000;
export const ACCESS_EXPIRES_KEY = "accessTokenExpiresAt";
export const REFRESH_EXPIRES_KEY = "refreshTokenExpiresAt";
export const CSRF_TOKEN = "csrf_token";

export const createProductSchema = z.object({
  name: z.string({ required_error: "Product name is required" }).trim().min(3),
  brand: z.string({ required_error: "Brand is required" }).trim().min(3),
  weight: z.string().trim().min(1, "Weight is required"),
  mrp: z.preprocess(
    (val) => Number(val),
    z.number({ required_error: "MRP is required" }).min(1),
  ),
  category: z
    .string()
    .trim()
    .min(1, "Category is required")
    .length(24, "Invalid SubCategory"),
  subCategory: z
    .string()
    .trim()
    .min(1, "SubCategory is required")
    .length(24, "Invalid SubCategory"),
  discount: z.preprocess(
    (val) => (val === "" ? undefined : Number(val)),
    z.number({ required_error: "Discount is required" }),
  ),
  description: z
    .string({ required_error: "Description is required" })
    .trim()
    .min(3),
  tags: z
    .array(z.string({ required_error: "Each tag must be a string" }))
    .min(1, { message: "At least one tag is required" }),
  stock: z.preprocess(
    (val) => (val === undefined ? undefined : Number(val)),
    z.number().optional(),
  ),
});
