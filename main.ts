// Pigeon Pitch, One Line — entry for u-donrulezz-pigeon-pitch-one-line-af06c6cf
// Writes the pigeon's one-line elevator pitch to <OUTPUT_DIR>/entry.txt.
// Node 22, stdlib only, deterministic, no network at runtime.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Think DoorDash, but your driver eats half the order, redecorates the restaurant, and still gets five stars — invest in my pigeon delivery startup.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PITCH, "utf8");
