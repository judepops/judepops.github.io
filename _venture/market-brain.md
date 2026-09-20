---
title: "market-brain: A Leakage-Free Longitudinal Corpus for Rating Markets"
collection: venture
category: research
type: "Research project"
venue: "Vela Partners"
permalink: /venture/market-brain
date: 2026-02-01   # TODO: confirm date
githuburl: "https://github.com/Vela-Research/market-brain"
excerpt: "A market-level, longitudinal, leakage-free feature corpus for predicting whether a market, independent of any team, produces an outlier company. The market-level sibling of Vela's founder-level research."
---

No published system rates or predicts the quality of a *market* as an evolving monthly time
series. market-brain builds that panel: **market-level, longitudinal and leakage-free**, for
predicting whether a market produces an outlier company independently of the team executing in it.

## Two dates on every datum

Every observation is keyed by a `reference_date` (the period the fact is *about*) and a
`knowledge_date` (when it first became public). A query for month T never returns anything whose
`knowledge_date` falls after the end of T. This is the ALFRED / point-in-time discipline, and the
entire corpus is built around it.

The analogy to internalise: quant-finance point-in-time backtesting discipline (look-ahead bias,
survivorship, data vintages) applied to market-emergence signals instead of stock prices.

## Methodological grounding

Each layer reuses a validated method from an established field:

- **Point-in-time data**: store every datum as it was known at each past date, never using
  later-revised values (Croushore & Stark, *J. Econometrics* 2001; the St. Louis Fed's ALFRED).
  Enforced by `check_no_future_leakage`.
- **Survivorship bias**: the month-T universe must include markets that later failed, not only
  survivors. Omitting failures overstates the past by roughly 1–4% a year. Enforced by
  `check_survivorship`.
- **Text-as-data indices**: turning dated news into a numeric monthly index by keyword counting,
  volume scaling, standardising and validating against a human-coded index (Baker, Bloom & Davis,
  *QJE* 2016; Caldara & Iacoviello, *AER* 2022).
- **Technical-emergence detection**: four validated gates (novelty, persistence, community,
  growth) with published thresholds (Carley et al., *Scientometrics* 2018).
- **Signal lineage**: developer adoption via OSS dependency growth (Brown et al., 2024); search
  nowcasting via BSTS and Google Trends (Kohns & Bhattacharjee, 2022).

Defensibility rests on one discipline: **no future leakage**. The integrity checks fail the build
rather than warn.
