---
published: false
---

# BSc thesis figures

Figures from the BSc Biochemistry final-year project at King's College London (2023, Lab of
Vascular Proteomics, James Black Centre, supervisor Dr Konstantinos Theofilatos):
"Integrative Multi-omics Analysis of Human Carotid Plaque Data Reveals Protective Smooth Muscle
Cell Phenotypes". Three public single-cell datasets were combined into an atlas of 58,364 cells,
and the smooth muscle cell phenotypes found in it were compared with plaque proteomics.

For the atherosclerosis project page (`_portfolio/BHF.md`).

| Image | What it shows | Source |
| --- | --- | --- |
| `vsmc-phenotypes-in-plaque.png` (hero) | The smooth muscle cell phenotypes found in human carotid plaque, coloured by their proposed effect on plaque stability | Thesis Fig 18B |
| `methods-pipeline.png` | The pipeline: public single-cell data processed in Seurat and Scanpy, integrated and benchmarked, annotated, sub-clustered, then compared with plaque proteomics | Thesis Fig 8 |
| `scrna-datasets.jpg` | The three public carotid plaque datasets combined into one atlas of 58,364 cells | Thesis Fig 10 |
| `integration-umaps.jpg` | Cells coloured by source study before integration and after Scanorama, Harmony and rPCA | Thesis Fig 11 |
| `integration-benchmark.png` | Seven benchmarking metrics for the three integration methods, grouped and as a weighted score | Thesis Fig 12 |
| `cell-annotation-vsmc-subset.png` | The atlas annotated from the Tabula Sapiens vasculature reference, and the smooth muscle subset | Thesis Fig 13 |
| `vsmc-subclustering.png` | Choosing a clustering resolution by silhouette width, the 14 sub-clusters, marker genes and the resulting phenotype groups | Thesis Fig 14 |
| `proteomics-signatures.png` | Plaque proteomics for the top phenotype genes: calcified vs non-calcified, symptomatic vs asymptomatic, female vs male | Thesis Fig 17A to C |
| `proteomics-core-vs-periphery.png` | The same genes in plaque core vs periphery | Thesis Fig 17D |

The proteomics comes from the lab's published plaque atlas (Circulation Research, 2023).
Crops and sizes are recorded in `_cowork/scripts/prepare_undergrad_images.py`; captions and
context are in `_cowork/notes/undergrad/01_thesis_carotid_plaque_multiomics.txt` (local only).
