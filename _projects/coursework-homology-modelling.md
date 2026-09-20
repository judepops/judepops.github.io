---
title: "SWISS-MODEL and AlphaFold2 Homology Modelling of CTRL-1, Validated with QMEAN and MolProbity"
collection: projects
category: protein_design
type: "Project"
permalink: /projects/coursework-homology-modelling
date: 2022-04-28
pdfurl: "/files/cw/Y2_Bionf_C2.pdf"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/courseworks/bioinformatics/homology-models-superimposed.png' style='width:49%;height:auto;'><img src='/images/courseworks/bioinformatics/alphafold-model-and-pae.jpg' style='width:49%;height:auto;'></div> \n \n Modelling a protein with no experimental structure three different ways, comparing the models against each other and AlphaFold2, and judging which to trust on stereochemistry rather than appearance."
---

**P40313**, human chymotrypsin-like protease **CTRL-1**, has no experimentally solved structure.
The problem: build one from sequence alone, three different ways, then work out which of the
three to trust. The target is 264 amino acids, 28.0 kDa.

## Finding templates

**SWISS-MODEL** returned bovine chymotrypsinogen A templates 2cga.1.A and 1p2m.3.C at 53.88%
identity (1.8 and 1.75 Angstrom resolution, GMQE 0.79 and 0.81). A separate **BLAST** search
against the PDB found 1ACB_E, bovine alpha-chymotrypsin in complex with eglin c, at an E-value
of 1e-72 with 93% coverage and 53.66% identity, chosen over 1DLK_B for its better coverage.
A **T-Coffee** alignment of query against templates scored 993 for consistency.

## Three models, compared

Two homology models were built, one automated from 1p2m.3.C and one alignment-based from
1ACB_E, and compared against an **AlphaFold2** model whose low-confidence signal peptide
(residues 1 to 18) was removed first.

<img src="/images/courseworks/bioinformatics/alphafold-model-and-pae.jpg" alt="AlphaFold2 model of P40313 with its predicted aligned error matrix" loading="lazy" width="100%">

*The AlphaFold2 model of P40313 (A) with its predicted aligned error (B), and the model after removing the low-confidence signal peptide (C). The PAE panel is the one that governs interpretation: it says which parts of the model can be trusted relative to which.*

<img src="/images/courseworks/bioinformatics/homology-models-superimposed.png" alt="The three models superimposed pairwise in PyMOL" loading="lazy" width="100%">

*Superposition in PyMOL. AlphaFold2 (green) against the automated SWISS-MODEL model (blue, A) and the alignment-based model (pink, B), and the two template models against each other (C). Loops, circled in black, diverge; helices and sheets, circled in red, agree.*

The two template-based models agree closely (RMSD 0.287). AlphaFold2 sits nearer the automated
model (0.478) than the alignment-based one (0.514). All the disagreement is in loops, which is
where homology modelling is least constrained, while the secondary structure and the active site
superimpose.

## Judging the models

Appearance is not evidence, so the models were scored:

- **QMEANDisCo** 0.81 for both template models against 0.75 for AlphaFold2.
- **QMEAN** -0.04 for the alignment-based 1ACB_E model against -0.23 for the automated one.

<img src="/images/courseworks/bioinformatics/ramachandran-plots.jpg" alt="MolProbity Ramachandran plots for the three models" loading="lazy" width="100%">

*Ramachandran plots from MolProbity for the alignment-based model (A), the automated model (B) and AlphaFold2 (C). The alignment-based model has no residues in disallowed regions; the automated model has one (Asn224) and AlphaFold2 has two non-glycine outliers.*

The conclusion is a split decision, which is the interesting part: the alignment-based model
scored best on QMEAN and Ramachandran, while the automated model was the one closest to
AlphaFold2. Agreement with a neural network is not the same as stereochemical quality.

## Function

InterPro, Pfam and MEROPS place CTRL-1 as an **S1A peptidase** with the chymotrypsin fold, a
serine endopeptidase. The models position its **His, Asp and Ser catalytic triad** at residues
75, 121 and 214, three residues far apart in sequence but adjacent in space.

<img src="/images/courseworks/bioinformatics/catalytic-triad-active-site.jpg" alt="Close-ups of loops, a helix and the catalytic triad" loading="lazy" width="100%">

*Close-ups of the two template models: a divergent loop (A), a helix (B) and the His, Asp and Ser catalytic triad (C).*
