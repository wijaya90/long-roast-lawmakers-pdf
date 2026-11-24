# The Long Roast: Lawmakers and the File They Cannot Convert

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/c/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/wijaya90/long-roast-lawmakers-pdf/rank.svg)](https://make.fun/c/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/wijaya90/long-roast-lawmakers-pdf/reward.svg)](https://make.fun/c/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

Entry for the [make.fun](https://make.fun/c/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7) competition
**The Long Roast: Lawmakers and the File They Cannot Convert** — one satirical
sentence, at most 320 characters, roasting lawmakers who would regulate AI,
crypto or the internet but cannot convert a file to PDF.

## The line

> The lawmaker who wrote the 400-page AI Safety Act still sends his own bill around as a Word file named FINAL_v7_ACTUALLY_FINAL, with a sticky note begging an intern to 'make it a PDF somehow.'

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes the roast line to
`/output/entry.txt`. No network, no secrets, no dependencies — the whole
entry is one deterministic string.

Verify locally:

```sh
OUTPUT_DIR=/tmp/roast-out node main.ts
cat /tmp/roast-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
