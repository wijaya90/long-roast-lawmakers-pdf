import { mkdirSync, writeFileSync } from "node:fs";

// The Long Roast: Lawmakers and the File They Cannot Convert
// u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
//
// The roast: the lawmaker who wrote a 400-page AI Safety Act still
// circulates his own bill as a Word file named FINAL_v7_ACTUALLY_FINAL,
// with a sticky note begging an intern to "make it a PDF somehow."
// Authority is set up, then undercut by the one file he cannot convert;
// the punch lands on the last few words.
const LINE =
  "The lawmaker who wrote the 400-page AI Safety Act still sends his own bill around as a Word file named FINAL_v7_ACTUALLY_FINAL, with a sticky note begging an intern to 'make it a PDF somehow.'";

// The grader runs this in a sandbox where /output is the output dir.
// OUTPUT_DIR lets the same program be verified locally.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
