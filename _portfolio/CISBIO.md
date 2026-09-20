---
title: "Elucidating Spatial Cell Composition of Neuroblastoma (Group Project)"
start_date: "2024-01-01"
end_date: "2024-03-01"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/cisbio_1.png' style='width:49%;height:auto;'><img src='/images/cisbio_2.png' style='width:49%;height:auto;'></div> \n \n <strong>Figure 2.1:</strong> single-cell RNA-seq workflow. <strong>Figure 2.2:</strong> single-cell spatial RNA-seq workflow. Please click the title for more detailed information on results and outcomes."

collection: portfolio
category: postgrad
aims:     
- Meta-analyse various single-cell studies of neuroblastoma, building a single-cell atlas that spans tumour cell diversity (Figure 2.1)
- Identify cell populations and tissue heterogeneity in single cell spatial transcriptomics (SCST) data using transfer learning from the single-cell reference. 
- Validate, test and scrutinise available tools for exploratory analysis of novel SCST data, including fine tuning and adpatation of a novel, multi-modal deep learning clustering approach (SiGra) (Figure 2.2)

skills:
  - task: "Single-Cell RNA-Seq Data Integration + Analysis"
    tools:
      - "Python: scanpy, rpy2, anndata2ri, integration(scanorama, scvi-tools), monocle, palantir " 
      - "R: seurat, integration (harmony, rPCA CCA, BBKNN), CONICSmat, CellChat"
  - task: "Single-Cell Spatial RNA-Seq Data Analysis"
    tools:
      - "squidpy, transfer learning (cell2location, singleR, Seurat, RCTD, scarches), nichedb, "
  - task: "Deep Learning (SiGRA Modification)"
    tools:
      - "torchvision, matplotlib(v2.1.1), torch, seaborn, tqdm, scikit_learn, torch_geometric, keras, optuna, weights and biases (wandb), xgboost"
  - task: "Shell Computing"
    tools:
      - Unix:, Git (init, clone, add, commit, status), pull, push, branch, merge), ssh, High Performance Computing (HPC), nohup, rsync, Slurm (sbatch), module, chmod (permissions) 
---

Three-month MRes group computing project with three other students, in collaboration with
Dr Ximena Montano at King's College London, who provided the spatial data.

## The question

Neuroblastoma is a solid tumour whose cellular makeup varies substantially between patients.
Single-cell RNA-seq describes which cell types are present but discards where they sit;
single-cell spatial transcriptomics keeps the positions but measures a targeted gene panel with
far less depth per cell. The project was a pilot combining the two, on NanoString CosMx spatial
transcriptomics from 13 neuroblastoma tumours spanning stages 1 to 4.

## Approach

**Building a reference atlas.** Public single-cell neuroblastoma studies were meta-analysed into
a single reference spanning tumour cell diversity. This was the phase I worked on, and it faces
the same integration problem as any multi-study atlas: batch effects between studies have to be
removed without flattening the biological differences that make the atlas worth building.

**Transferring labels to the spatial data.** Cell populations in the CosMx data were annotated by
transfer learning from that reference, with label-transfer methods benchmarked against each other
rather than one chosen in advance.

**Multimodal clustering.** We adapted **SiGra**, a graph deep-learning model that combines
multichannel immunohistochemistry images, a spatial neighbour graph and gene expression, so that
clustering uses tissue morphology and physical neighbourhood alongside expression.

## Outcome

Presented at Spatial Biology Research at King's in July 2024, with a manuscript in preparation.

The CosMx data is Dr Montano's and unpublished.
