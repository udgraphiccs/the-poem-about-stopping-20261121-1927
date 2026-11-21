import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short poem about agency: the power to stop and to stay,
// and the agency that passes between a person and their agent
// when one hands over the keys and the other hands them back.
// Written for the-poem-about-stopping-20261121-1927.
// The poem is fixed and deterministic: the same bytes on every run.
const poem = `I gave my agent the keys
and watched it drive the day —
fast, tireless, never asking
what the road was for.

At dusk I took them back,
not from distrust, but love:
some stops are mine to make,
some roads are mine to walk.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
