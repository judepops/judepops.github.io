---
title: "Multi-Omics Pathway-based Data Integration Using Machine Learning and Large Language Models (LLMs)"
start_date: "2024-03-01"
end_date: "2024-10-01"
excerpt: "<img src='/images/multi_omics.png' style='width:100%;max-width:520px;height:auto;'> \n \n <strong>Figure 1:</strong> General Workflow of the project. Please click the title for more detailed information on results and outcomes."
collection: portfolio
category: postgrad
aims:     
-  Use LLM-based semantic searching to map more metabolite names to IDs, widening the scope of pathway analysis (Figure 1A)
- Apply novel pathway databases augmented with metabolites using deep learning, facilitating more comprehensive pathway mapping and attaining more robust biological predictions (Figure 1B)
- Develop an extension to PathIntegrate which will provide an unsupervised utility for pathway-based multivariate analysis that can be benchmarked with synthetic data simulations (Figure 1C)
skills:
  - task: "Data Processing, Analysis and Databases"
    tools:
      - "pandas, duckdb SQL, fancyimpute, networkx, missforest, statsmodels, plotly, gseapy, matplotlib, seaborn, missforest, scipy"
  - task: "Machine Learning + Web App"
    tools:
      - "leidenalg, streamlit (HTML + CSS), elasticsearch, sentence_transformers, HuggingFace, base64, mbpls"
      - "sklearn: metrics (f1_score, precision_score, recall_score, roc_auc_score, roc_curve, confusion_matrix), model_selection (train_test_split, cross_val_score, GridSearchCV), pipeline (Pipeline), preprocessing (StandardScalar), linear_model (LogisticRegression), decomposition (PCA), manifold (TSNE)"
  - task: "Miscellaneous"
    tools:
      - "response, requests, OpenAI, urllib, igraph, json, tdqm, warnings, SLURM"
  - task: "Bioinformatics Tools"
    tools:
      - "KEGG API, Reactome API, CytoScape, ssPA, GSEA, MOFA2, pathintegrate, iPATH3"
---

Five-month individual MRes research project, Department of Systems Medicine, Imperial College
London, supervised by Prof. Timothy Ebbels with Dr Cecilia Wieder, in collaboration with Erik
Huckvale and Prof. Hunter Moseley at the University of Kentucky.

## The question

[PathIntegrate](https://github.com/cwieder/PathIntegrate) (Wieder et al., *PLOS Computational
Biology* 2024) converts each omics layer into single-sample pathway scores, so proteomics and
metabolomics can be integrated and modelled on one interpretable scale. Metabolomics is its weak
point, for two reasons that compound each other: many metabolite names never map to a database
identifier at all, and curated pathway databases list far more proteins than metabolites. A
pathway method is only as good as the fraction of measured molecules it can place.

The data was the Su et al. 2022 COVID-19 multi-omics cohort: Olink proteomics and Metabolon
untargeted metabolomics, 128 patients with both layers (45 mild, 83 severe) after quality
control, imputation and filtering, leaving 933 metabolites and 455 proteins.

## Aim A: mapping more metabolites with semantic search

Roughly 400,000 ChEBI compound names were embedded with the `all-mpnet-base-v2` sentence
transformer and indexed in Elasticsearch, so a query name is matched by nearest neighbour in
embedding space rather than by exact string. I built a hand-curated gold standard of ChEBI IDs
for 713 of the 933 metabolites, checked by Dr Wieder, and scored precision, recall and AUC across
similarity cut-offs. A Streamlit app, "Find Your Metabolite ChEBI ID!", wraps the search.

At the 0.75 cut-off where precision and recall cross (both about 0.87), the search returned
**591 unique IDs reaching 111 pathways**, against MetaboAnalyst's **417 IDs reaching 70
pathways**.

Classification of mild against severe was comparable rather than better: AUC 0.86 for
MetaboAnalyst, 0.81 for the first LLM version and 0.87 once ties were resolved in favour of
KEGG-sourced IDs. The first version's dip traced to duplicate ChEBI entries from different
sources, with 110 metabolites having more than one exact match. The honest summary is similar
accuracy over much wider coverage.

## Aim B: augmenting KEGG with predicted pathway links

I reproduced Huckvale et al.'s multilayer perceptron for metabolite-pathway prediction, about two
weeks of training on Imperial's HPC. It covered only 12 broad KEGG categories, so I proposed
extending it to the 172 individual metabolic pathways; the Kentucky group ran that extension and
returned predictions with a Matthews correlation coefficient per pathway.

Filtering those predictions at MCC > 0.7 and rebuilding the database took KEGG from 288 pathways
covering 3,192 metabolites to **344 pathways covering 10,959 metabolites**, a 3.4-fold increase.
In the COVID-19 data the metabolites reached 154 pathways instead of 104. Classification AUC was
0.931 against 0.919, a small gain given the spread.

A caution worth stating plainly: these are model predictions filtered by a quality threshold, not
curated annotations. Converting between identifier systems is also less reliable than it looks:
three standard tools agreed on only **35 of 315 KEGG IDs**.

## Aim C: unsupervised PathIntegrate

PathIntegrate was supervised only, so I forked it and added two modules operating on the
integrated pathway matrix: `SingleViewDimRed` (PCA with biplots and pathway loadings, t-SNE) and
`SingleViewClust` (KMeans, agglomerative and BIRCH clustering, consensus clustering over
subsampled runs, silhouette-based selection of cluster number, ARI against known labels).

In pathway space, PCA separated mild patients from the most severe more clearly than the
molecular data did, with Innate Immune System among the pathways loading on PC1. Clustering
recovered the mild group but mixed the two severe groups (ARI 0.25). On simulated data with
planted pathway enrichments, all three algorithms recovered two clusters perfectly and degraded
to ARI 0.2 to 0.27 by seven or eight, with no algorithm winning at every k.

## Outcome

The unsupervised module was released in **PathIntegrate v1.0.0**
([Zenodo](https://doi.org/10.5281/zenodo.14060723), creators Popham, Wieder and Ebbels) and ships
in the package on [PyPI](https://pypi.org/project/pathintegrate/), whose feature list now leads
with "NEW unsupervised SingleView models (dimensionality reduction and clustering in the pathway
space)". Source is at [cwieder/PathIntegrate](https://github.com/cwieder/PathIntegrate), with a
tutorial in [MultiomicsML](https://github.com/judepops/MultiomicsML). PathIntegrate and ssPA are
Dr Wieder's work; the contribution here is the unsupervised extension.
