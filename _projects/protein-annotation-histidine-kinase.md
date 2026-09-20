---
title: "DeepTMHMM, PSI-BLAST, InterPro and AlphaFold Annotation of an Unknown Sensor Kinase"
collection: projects
category: protein_design
type: "Project"
permalink: /projects/protein-annotation-histidine-kinase
date: 2023-12-11
pdfurl: "/files/cw/protein-annotation.pdf"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/postgrad-courseworks/protein-annotation/alphafold-annotated-structure.png' style='width:49%;height:auto;'><img src='/images/postgrad-courseworks/protein-annotation/domain-annotation-summary.png' style='width:49%;height:auto;'></div> \n \n Annotating an unknown 460-residue protein from sequence alone, from transmembrane topology through profile searches and domain databases to a predicted structure, arriving at a bacterial two-component sensor histidine kinase."
---

An unknown protein of about 460 residues, to be annotated from its sequence alone: topology,
homologues, domains and predicted structure, ending in a single annotation that all of the
evidence supports.

## Topology

**DeepTMHMM** predicted two transmembrane helices, at residues 22 to 41 and 172 to 189, with an
extracellular region between them and both termini inside the cell. **PHOBIUS** agreed to within
a few residues. Two independent predictors converging is worth more than either one alone.

## Homologues, and what a profile search buys you

**BLASTp** returned sensor kinases such as CarS and PhoQ. Two iterations of **PSI-BLAST**
returned MprB signal-transduction histidine kinases instead, and the comparison is the
instructive part:

| | BLASTp | PSI-BLAST |
| --- | --- | --- |
| Mean -log10 E-value | 44.74 | **117.51** |
| Query cover | 68% | **94%** |
| Sequence identity | **33.3%** | 21.7% |

PSI-BLAST finds hits that are far more significant and cover far more of the query, at *lower*
sequence identity. That is exactly what a profile search is for: after the first iteration it
searches with a position-specific scoring matrix built from the hits, so it matches conserved
positions rather than overall similarity, and reaches homologues too distant for a pairwise
search to see.

<img src="/images/postgrad-courseworks/protein-annotation/blastp-vs-psiblast.png" alt="BLASTp against PSI-BLAST hit comparison" loading="lazy" width="100%">

*Annotated search output: the profile search finds more distant homologues, with lower E-values and higher query cover but lower identity.*

## Domains

**InterPro** found four features: a HAMP domain (192 to 243) sitting immediately before a
histidine kinase domain (251 to 453), with an HSP90-like ATPase region (348 to 451) and two
C-terminal signal transduction motifs.

The arrangement is the answer. A HAMP domain is the linker that transmits a conformational change
from a transmembrane helix to a cytoplasmic signalling domain, so finding one wedged between the
membrane helices and the kinase domain says this protein is built to pass a signal inward across
the membrane.

## Structure

**Phyre2** returned ten models above 99.9% confidence at 17 to 26% identity, comfortably over the
15% threshold for accepting a model, and every template was a kinase or sensor protein. But the
models covered only about residues 190 to 450, leaving the transmembrane and extracellular parts
unmodelled, because there were no templates for them.

**AlphaFold** covered the whole chain, with pLDDT above 90 across both transmembrane helices and
the kinase domain, dropping only across the first 20 residues. It agreed with Phyre2 on the
kinase fold and supplied the parts template-based modelling could not reach.

<img src="/images/postgrad-courseworks/protein-annotation/alphafold-model-confidence.png" alt="The AlphaFold model coloured by pLDDT confidence and by secondary structure" loading="lazy" width="100%">

*The AlphaFold model coloured by confidence (pLDDT) and by secondary structure. Reading the confidence colouring first is the discipline: the low-confidence N-terminus is a disordered tail, not a structural claim.*

<img src="/images/postgrad-courseworks/protein-annotation/alphafold-annotated-structure.png" alt="The AlphaFold model placed in the membrane with its domains labelled" loading="lazy" width="100%">

*The model placed in the membrane with the transmembrane, HAMP, kinase and extracellular domains labelled. Every label traces back to a separate line of evidence: topology from DeepTMHMM and PHOBIUS, domains from InterPro, fold from Phyre2 and AlphaFold.*

## Final annotation

<img src="/images/postgrad-courseworks/protein-annotation/domain-annotation-summary.png" alt="Final domain map along the 462 residues" loading="lazy" width="100%">

*The final annotation along the chain: topology, domains and secondary structure, combining PHOBIUS, InterPro and the BLAST searches into one map. Drawn in matplotlib.*

A gram-negative bacterial **sensor histidine kinase** from a two-component system, with the
domain order of the canonical *E. coli* EnvZ architecture: sense a stimulus outside the membrane,
pass the conformational change through HAMP, autophosphorylate on the kinase domain inside.

This is a coursework annotation of a set sequence, inferred from prediction rather than
experimentally validated.
