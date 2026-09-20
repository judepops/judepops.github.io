---
title: "DESeq2 Differential Expression and EMBOSS Needle Alignment on a HOXA1 Knockdown"
collection: projects
category: coding
type: "Project"
permalink: /projects/coursework-sequence-analysis-deseq2
date: 2022-03-27
pdfurl: "/files/cw/Y2_Bionf_C1.pdf"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/courseworks/bioinformatics/deseq2-ma-plot.png' style='width:49%;height:auto;'><img src='/images/courseworks/bioinformatics/deseq2-sample-distances.jpg' style='width:49%;height:auto;'></div> \n \n Pairwise alignment, a DESeq2 differential expression analysis of a HOXA1 knockdown, and structured queries across Ensembl and COSMIC."
---

A set of exercises spanning pairwise alignment, differential expression analysis and structured
queries across the public genomics databases.

## Pairwise alignment

A global alignment of two isoforms of a transcription factor in **EMBOSS Needle** returned
40.3% identity over 469 positions, 280 of which were gaps. The gaps are the result: one isoform
lacks the DNA-binding domain entirely, and an alignment that scores poorly on identity is the
thing that shows it.

## Differential expression with DESeq2

**DESeq2** run in Galaxy on count data from a HOXA1 knockdown in lung fibroblasts (Trapnell et
al. 2012), three knockdown against three control. Of 19,808 genes, **7,797 were significant at
adjusted p < 0.05**, and **1,962 of those changed more than two-fold**. PC1 separated the two
groups and accounted for 96% of the variance.

<img src="/images/courseworks/bioinformatics/deseq2-sample-distances.jpg" alt="Sample-to-sample distance matrix for knockdown and control samples" loading="lazy" width="100%">

*Sample-to-sample distances. Knockdown and control cluster apart, which is the check worth doing before trusting any gene-level result: if replicates do not group by condition, the differential test is describing something other than the condition.*

<img src="/images/courseworks/bioinformatics/deseq2-ma-plot.png" alt="MA plot of HOXA1 knockdown against control, significant genes highlighted" loading="lazy" width="100%">

*MA plot for the knockdown against control, significant genes in blue. Plotting log fold change against mean expression is what keeps the large fold changes at low counts in proportion.*

## Comparative genomics and cancer variants

- **Ensembl.** HORMAD1 across human, mouse and alpaca, with longest protein isoforms of 394,
  392 and 392 amino acids, and the paralogue HORMAD2 present in all three.
- **COSMIC and GDSC.** EGFR variants, where L858R is the most frequently recorded EGFR mutation
  (count 7,965) and T790M is c.2369C>T, together with the associated drug sensitivity data for
  erlotinib, osimertinib, afatinib and gefitinib.
