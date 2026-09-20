---
title: "Half-Life: Predicting Which Research Ideas Compound and Which Fade"
collection: venture
category: research
type: "Research project"
venue: "Vela Partners"
permalink: /venture/halflife-research
date: 2026-06-01   # TODO: confirm date
githuburl: "https://github.com/judepops/halflife-research"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/vc-research/halflife-detector.png' style='width:49%;height:auto;'><img src='/images/vc-research/vela-research-trends.png' style='width:49%;height:auto;'></div> \n \n Most research ideas decay, a few compound. This reads a new idea's first months on arXiv and predicts whether it will still be growing two years later. It achieves +0.23 AUPRC over momentum, with six of six pre-registered cross-field predictions correct."
---

Every hype cycle produces hundreds of "next big things". Most fade within two years. A few, such as
transformers and GRPO, become the foundation of a field and of the companies built on it. The usual
way to tell them apart is **momentum**: how fast something is growing. But in their first months,
a durable idea and a spike look identical.

Half-Life reads a research theme's first months and predicts whether it will still be growing two
years later.

| Result | |
| --- | --- |
| **+0.23 AUPRC** over momentum | durable vs fad across 383 AI/ML research themes, 95% CI [+0.12, +0.33], p < 0.001 |
| **6 / 6** | pre-registered cross-field predictions correct |
| **+0.16, p = 0.002** | transfers unchanged to biology (263k bioRxiv preprints) |
| **Momentum subsumed** | adding momentum to the model adds nothing on top |
| **0 look-ahead** | every datum carries the date it became public; a leakage test gates every build |

## The pipeline

1. **Collects** papers and eight other alternative-data sources, storing each record with the date
   it became public.
2. **Detects** new research themes as they emerge, month by month.
3. **Measures** each theme *as it looked at the time*: how persistently it appears, how many
   independent groups adopt it, how fast it grows, how widely it spreads.
4. **Predicts** durable vs fad, and reports the theme's current trajectory (accelerating,
   sustained, cooling, faded) and the researchers driving it.

<img src="/images/vc-research/halflife-detector.png" alt="Detector performance against the momentum baseline" width="100%">

## Quant methodology

The project applies quant-finance backtesting discipline to research and alternative data. Each
control is enforced in code, not merely described:

- **Point-in-time data** (the ALFRED / real-time data approach). Every record carries a
  `reference_date` (what it is about) and a `knowledge_date` (when it became public). A month-T
  query sees nothing published after T.
- **A leakage canary**: `check_no_future_leakage` runs on every panel build and fails it on any
  violation.
- **Survivorship-free universes**: failed markets and dead ideas stay in every month's universe.
- **Look-ahead leak hunting**: arXiv venue and institution fields turned out to be backfilled
  after acceptance, and were removed.
- **Pre-registration**: hypotheses, thresholds and all six field predictions were fixed before
  scoring.
- **Placebo and permutation tests**: label-shuffle placebos and stratified permutation nulls, to
  rule out lift from a bug or from sector/year composition.

<img src="/images/vc-research/halflife-transfer.png" alt="Transfer of the detector to biology preprints" width="100%">

<img src="/images/vc-research/halflife-capital-null.png" alt="Capital null test" width="100%">

<img src="/images/vc-research/halflife-signals-llm-dev-tools.png" alt="Signal decomposition for LLM developer tools" width="100%">

## In production at Vela

Vela Partners now runs an extended version in house as a monthly research-trends product: every
idea in the field plotted as its share of papers over time, with a durability verdict, trajectory
and the researchers behind it.

<img src="/images/vc-research/vela-research-trends.png" alt="Vela Research Trends product" width="100%">

<img src="/images/vc-research/vela-bedrock-rising-now.png" alt="Rising-now view" width="100%">

<img src="/images/vc-research/vela-chat.png" alt="Conversational interface over the trends data" width="100%">
