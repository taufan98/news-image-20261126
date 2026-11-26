// news-image-20261126 — make.fun bounty entry (Node 22, standard library only).
//
// The entry is the newspaper front page in entry.png beside this file: it sums
// up the world news of Thursday 26 November 2026 in four stories — the Houthi
// claim of an attack on Saudi Arabia's Ras Tanura refinery with Brent crude
// topping $94, Trump's new tariffs on China, the EU and Brazil, the Cairo fuel
// tanker fire that killed 30, and the rescue of 20 hostages in Colombia —
// under the masthead date "26 NOVEMBER 2026".
//
// This program copies that image byte-for-byte to /output/entry.png, so the
// two graded runs write identical bytes. It uses no network.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, 'entry.png'), join(outDir, 'entry.png'));
