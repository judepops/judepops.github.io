---
published: false
---

# MRes thesis figures

Figures from the MRes individual project at Imperial College London (2024, supervisors
Professor Timothy Ebbels and Dr Cecilia Wieder): "Multi-omics pathway-based data integration
using machine learning and large language models (LLMs)". The project widened what
PathIntegrate can see in metabolomics data and added unsupervised analysis to the package.

For the MRes project page (`_portfolio/NIHR.md`) and the PathIntegrate Unsupervised
software page.

| Image | What it shows | Source |
| --- | --- | --- |
| `workflow-schematic.png` (hero) | The project on one page: the standard PathIntegrate workflow and the three aims (LLM-based metabolite annotation, an augmented KEGG database, unsupervised tools) | Thesis Fig 1 |
| `llm-annotation-workflow.png` | How the metabolite search works: ChEBI names embedded with a sentence transformer, indexed in Elasticsearch and queried through a Streamlit app | Thesis Fig 4A |
| `chebi-search-web-tool.png` | The web tool: a single search for spermidine, and a multi search table with match scores | Thesis Fig 4C and D |
| `llm-threshold-benchmark.png` | Choosing a similarity cut-off: precision and recall against 713 hand-annotated metabolites cross at 0.75 | Thesis Fig 5A |
| `annotation-methods-comparison.png` | MetaboAnalyst, hand annotation and the LLM search compared: identifiers found, pathways reached, classification ROC curves, and duplicate ChEBI identifiers by source | Thesis Fig 6 |
| `augmented-kegg-pathways.png` | Adding predicted metabolite-pathway links to KEGG: where KEGG's metabolites sit, classification with each database, and the 56 added metabolic pathways on the human metabolic map (drawn with iPATH3) | Thesis Fig 8 |
| `pathintegrate-unsupervised-extension.png` | The unsupervised extension: forked, built and merged into PathIntegrate, and the two new functions with the simulations used to test them | Thesis Fig 2 |
| `clustering-benchmark.png` | Eight simulated clusters made by boosting chosen pathways, and how well KMeans, agglomerative and BIRCH clustering recover 2 to 8 of them | Thesis Fig 10D and E |

Test data are public (Su et al., 2022). Two files were made from higher-resolution exports
already in `images/` rather than from the thesis PDF. Single-panel crops have their stray panel
letters removed, and Fig 8's third panel keeps a shortened title. Crops and sizes are recorded
in `_cowork/scripts/prepare_postgrad_images.py`; captions, numbers and context are in
`_cowork/notes/postgrad/01_thesis_pathintegrate_llm_multiomics.txt` (local only).
