---
published: false
---

# Venture research figures

Figures from the research internship at Vela Partners (2026): GraphFounder, which groups
founders into archetypes with a heterogeneous graph neural network, and halflife-research, which
predicts whether a new research idea will still be growing two years later. The last three are
screenshots of the in-house product built on halflife-research.

For the venture research pages (`/vc-research/graphfounder/` and
`/vc-research/halflife-research/`).

| Image | What it shows | Project |
| --- | --- | --- |
| `graphfounder-archetypes-vs-tabular.png` (hero) | Clustering on tabular features against GraphFounder's archetypes, and the gap between them at every number of clusters | GraphFounder |
| `graphfounder-archetype-profiles.png` | What defines each archetype: feature z-scores against the whole population | GraphFounder |
| `graphfounder-held-out-test.png` | Held-out founders placed on the training landscape, success rates in training and test, and where the test successes fall | GraphFounder |
| `graphfounder-ablations.png` | Separation by embedding method, cluster stability across seeds, and sensitivity to the loss's precision weight | GraphFounder |
| `halflife-detector.png` (hero) | Detecting durable ideas in AI and machine learning: the durability signature against momentum and random | halflife-research |
| `halflife-transfer.png` | The same model, unchanged, on arXiv and on bioRxiv, with 95% confidence intervals | halflife-research |
| `halflife-capital-null.png` | Share of themes that go on to produce a large company: the difference is within noise | halflife-research |
| `halflife-signals-llm-dev-tools.png` | LLM developer tools: research and adoption compound while attention and funding spike | halflife-research |
| `vela-research-trends.png` | Research Trends: every AI research idea's share of the field over time (cropped) | Vela product |
| `vela-bedrock-rising-now.png` | Rising now: each theme's durability call, rank band and trajectory | Vela product |
| `vela-chat.png` | Asking the product for the top durable ideas rising right now (cropped) | Vela product |

Sources and crops are recorded in `_cowork/scripts/prepare_vc_images.py`; the numbers that go
with each figure are in `_cowork/notes/CONTENT_BRIEF.md` (local only).
