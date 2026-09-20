---
title: "Integrative Multi-omics Analysis of Human Carotid Plaque Reveals Protective Smooth Muscle Cell Phenotypes"
start_date: "2023-01-01"
end_date: "2023-10-01"
excerpt: "<br/><img src='/images/atherosclerosis.jpg'> \n \n <strong>Figure 3:</strong> General Workflow of the project. Please click the title for more detailed information on results and outcomes."
collection: portfolio
category: undergrad
aims:
- Integrate three public carotid plaque scRNA-seq datasets into a single atlas, benchmarking batch-correction methods rather than assuming one.
- Sub-cluster the smooth muscle compartment and characterise its phenotypes from marker genes and differential expression.
- Associate each phenotype with the lab's plaque proteomics across calcification, symptom status, sex and plaque region.
skills:
  - task: "Single-cell Integration and Benchmarking"
    tools:
      - "Seurat v4.3.0 (R)"
      - "Scanpy (Python)"
      - "Harmony, Scanorama, Seurat rPCA"
      - "SeuratDisk"
  - task: "Benchmark Metrics"
    tools:
      - "NMI, ARI, average silhouette width"
      - "kBET, LISI"
  - task: "Annotation and Clustering"
    tools:
      - "Tabula Sapiens label transfer"
      - "Louvain and Leiden clustering"
      - "Differential expression, PANTHER protein classes"
  - task: "Proteomics and Visualisation"
    tools:
      - "TMT 10-plex mass spectrometry data"
      - "ggplot2"
---

Final-year BSc research project in the Lab of Vascular Proteomics, James Black Centre, King's
College London, supervised by Dr Konstantinos Theofilatos.

## The question

Plaques containing more vascular smooth muscle cells are less likely to rupture, but VSMCs change
state in disease. Studies typically identify them from a handful of marker genes carried over
from mouse models, single-cell studies propose conflicting cell states, and every dataset carries
its own batch effects. The project pooled public single-cell data into one atlas, found VSMC
phenotypes within it, and tested those phenotypes against plaque proteomics and clinical features.

## Building the atlas

Three public scRNA-seq datasets of human carotid endarterectomy plaque, located through
PlaqView: Pan et al. 2020 (8,867 cells), Fernandez et al. 2019 (5,680) and Alsaigh et al. 2022
(51,981). After quality control in Seurat, removing empty droplets, doublets and dying cells by
gene count and mitochondrial fraction, **58,364 of 66,528 cells were kept**.

## Benchmarking the integration

Rather than picking a batch-correction method on reputation, three were run and scored:
**Harmony**, **Scanorama** and **Seurat rPCA**. Seven metrics in three groups were scaled to a
common range: biological conservation (NMI, ARI against each source dataset), clustering quality
(average silhouette width) and batch mixing (kBET, LISI), weighted 2:1 towards biology.

| Method | Biology | ASW | Technical | Overall |
| --- | --- | --- | --- | --- |
| Seurat rPCA | 0.565 | 0.261 | 0.846 | **0.557** |
| Scanorama | 0.515 | | 0.860 | 0.545 |
| Harmony | 0.573 | 0.085 | | 0.497 |

The trade-off is the interesting part. Scanorama mixed batches best but preserved the least
biology; Harmony preserved biology but clustered poorly, leaving the Fernandez immune cells
separated in its UMAP. rPCA struck the best balance. The gaps are small, so this is a
best-compromise result rather than a decisive one, and kBET sat between 0.996 and 0.9999 for all
three, so it did not discriminate at all.

## Phenotypes

Cell types were assigned by label transfer from the Tabula Sapiens vasculature reference. The
VSMC, pericyte and fibroblast subset (**13,692 cells**) was re-clustered at Louvain resolutions
from 0.3 to 1.4, with 0.6 chosen on silhouette width, giving 14 clusters.

Phenotypes were named from literature markers, per-cluster differential expression and PANTHER
protein classes together, with the literature labels treated as guidance rather than ground
truth: contractile (ACTC1, MYH11, ACTN1), transitional, highly proliferative, osteogenic-like,
fibroblast-like and foam-like.

## Linking to proteomics

Each phenotype's top genes were tested against the lab's carotid plaque proteomics, a Medical
University of Vienna cohort of 120 patients and 219 samples (110 plaque core, 109 periphery)
measured by TMT 10-plex mass spectrometry, comparing calcified against non-calcified,
symptomatic against asymptomatic, male against female, and core against periphery.

Osteogenic-like and fibroblast-like VSMCs expressed genes associated with forming a protective
fibrous cap, while inflammatory foam-like VSMCs were dispersed through the plaque and associated
with greater instability. These are interpretations from marker genes and proteomic
associations, not measured clinical outcomes.

## Outcome

The work continued as a paid extension over summer 2023, adding validation by spatial
transcriptomics, cell-cell communication analysis, pseudotime and bulk deconvolution. I am a
co-author on the resulting manuscript in *Circulation Research*: "Proteomic Atlas of
Atherosclerosis: The Contribution of Proteoglycans to Sex Differences, Plaque Phenotypes, and
Outcomes", a collaboration between the Medical University of Vienna and King's.
