---
title: "GraphFounder: Interpretable Founder Archetypes via Heterogeneous Graph Neural Networks"
collection: venture
category: research
type: "Research project"
venue: "Vela Partners"
permalink: /venture/graphfounder
date: 2026-04-01   # TODO: confirm date
githuburl: "https://github.com/Vela-Research/graph-founder"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/vc-research/graphfounder-archetype-profiles.png' style='width:49%;height:auto;'><img src='/images/vc-research/graphfounder-archetypes-vs-tabular.png' style='width:49%;height:auto;'></div> \n \n Modelling founder credentials as a typed attribute graph and clustering the GNN embeddings into interpretable archetypes, giving a 29.7 pp success-rate spread across a 9,000-founder benchmark, 6.9x that of tabular clustering."
---

GraphFounder models founder credentials as a **typed attribute graph**, connecting founders to
university prestige tiers, company sizes, industries and roles, then clusters the resulting graph
neural network embeddings into interpretable archetypes.

On a 9,000-founder benchmark it produces archetypes with a **29.7 percentage-point success-rate
spread**, 6.9× that of tabular clustering, separating subgroups whose success rates run from
1.9% to 31.6%.

<img src="/images/vc-research/graphfounder-archetype-profiles.png" alt="Discovered founder archetype profiles" width="100%">

The point is not only accuracy but **interpretability**: each archetype is readable as a
credential pattern, so the output is something an investment team can reason about rather than a
score with no explanation attached.

<img src="/images/vc-research/graphfounder-archetypes-vs-tabular.png" alt="Graph archetypes versus tabular clustering" width="100%">

<img src="/images/vc-research/graphfounder-held-out-test.png" alt="Held-out test performance" width="100%">

<img src="/images/vc-research/graphfounder-ablations.png" alt="Ablation study" width="100%">

## Reproducibility

The repository is the reproducible implementation behind the **ICDM 2026 Applied Track** paper.
Every result table and figure is committed and regenerates from cached model outputs with a
single command, with no GPU and no retraining:

```bash
python reproduce.py --from-cache --all
```

The dataset is read only for the train/validation/test split and the labels. Deterministic steps
(k-means on the committed embedding, bootstrap confidence intervals, χ², plotting) re-run on
the cached artifacts to reproduce the paper's tables and figures exactly.
