import * as fc from "fast-check";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { REQUIRED_ASSET_FILES, REQUIRED_PUBLIC_FILES } from "../fixtures/required-slugs";

const ASSETS_DIR = join(process.cwd(), "src/assets");
const PUBLIC_DIR = join(process.cwd(), "public");

describe("Feature: aws-lambda-managed-instance-walkthrough, Property 6: Required static assets", () => {
  it("all required SVG assets exist in src/assets/", () => {
    fc.assert(
      fc.property(fc.constantFrom(...REQUIRED_ASSET_FILES), (filename) => {
        expect(existsSync(join(ASSETS_DIR, filename))).toBe(true);
      }),
      { numRuns: Math.max(100, REQUIRED_ASSET_FILES.length) }
    );
  });

  it("required public files exist in public/", () => {
    fc.assert(
      fc.property(fc.constantFrom(...REQUIRED_PUBLIC_FILES), (filename) => {
        expect(existsSync(join(PUBLIC_DIR, filename))).toBe(true);
      }),
      { numRuns: Math.max(100, REQUIRED_PUBLIC_FILES.length) }
    );
  });
});
