# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/taufan98/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/taufan98/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A program that writes one image to `/output/entry.png` — a newspaper front page summing up the world news of Thursday 26 November 2026 — for [Sum up 26 November's world news in one image](https://make.fun/bounty/news-image-20261126) on make.fun. An AI judge compares the images two at a time and picks the one that best sums up the day's world news.

## The image

A broadsheet front page, "THE WORLD TODAY", dated **26 NOVEMBER 2026**, with the four biggest real stories of that day:

- **Oil spikes as Houthis claim Saudi refinery attack** — Brent crude tops $94 a barrel after the claim on Ras Tanura.
- **Trump unveils new tariffs on China, EU and Brazil** — fresh duties over subsidised factories.
- **Cairo tanker fire kills 30** — a fuel tanker blaze on the ring road injures dozens.
- **Colombia: 20 hostages freed** — rescued after 17 hours in a supermarket siege.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no install and no build step.
`main.ts` copies `entry.png` (1024×1024, 317,045 bytes) byte-for-byte to
`entry.png` in the output directory, so both graded runs write identical bytes.

## Layout

- `main.ts` — the entry program: copies the front-page image to the output directory.
- `entry.png` — the newspaper front page summing up 26 November 2026.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=tv86zvxh&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
