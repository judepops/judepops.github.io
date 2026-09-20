---
title: "SnapGene Design of a Frataxin-AcGFP1 Fusion Vector with XhoI and PstI Cloning"
collection: projects
category: genetics
type: "Project"
permalink: /projects/coursework-frataxin-gfp-vector
date: 2022-03-01
pdfurl: "/files/cw/Y2_MBRS_C1.pdf"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/courseworks/genetics/pfxn-acgfp1-n1-plasmid-map.jpg' style='width:49%;height:auto;'><img src='/images/courseworks/genetics/fxn-gfp-end-junction.png' style='width:49%;height:auto;'></div> \n \n Designing a vector to express human frataxin with a C-terminal GFP fusion: primers, an enzyme pair that does not cut the gene, and a construct verified in frame at both junctions."
---

Design a vector expressing human frataxin with GFP fused to its C-terminus, plus an experiment
to find where frataxin goes inside human cells.

## Primer design

Working from the frataxin coding sequence (isoform 1 preproprotein, cDNA IMAGE:4842134 in
pOTB7), with **EMBOSS Sixpack** used to resolve the reading frames:

- Forward `ATGTGGACTCTCGGGCGCCGCGCAG`, Tm 67.5 C
- Reverse `AGCATCTTTTCCGGAATAGGCCAAGGAAGAC`, Tm 63 C
- **The stop codon is deliberately omitted** so that translation reads on into GFP
- Predicted product 630 bp, amplified at 95 C for 2 min, then 30 cycles of 95 C 20 s, 58 C 20 s
  and 72 C 15 s, with a 3 min final extension

## Choosing the enzymes

Thirteen enzymes in the pAcGFP1-N1 multiple cloning site were screened against the frataxin
sequence itself. **BglII, SacI, SacII and SmaI all cut inside the gene** and were ruled out,
which is the check that decides the whole design: an enzyme that cuts the insert destroys it.

Of five workable pairs, **XhoI and PstI** were chosen, both active in Buffer H so the digest can
be done in one reaction. Each primer carries a GGG clamp plus its site (CTCGAG or CTGCAG) ahead
of the gene-specific sequence, the clamp being there so the enzyme has enough flanking DNA to
bind and cut.

<img src="/images/courseworks/genetics/pfxn-acgfp1-n1-plasmid-map.jpg" alt="SnapGene map of the designed pFXN-AcGFP1-N1 vector" loading="lazy" width="100%">

*The designed vector pFXN-AcGFP1-N1 (5,341 bp) in SnapGene: frataxin fused to AcGFP1 under the CMV promoter, cloned between XhoI and PstI, with both primers marked.*

## Checking the frame

A C-terminal fusion only works if frataxin's codons run into GFP's without a stop and without a
frameshift. One base out at either junction and the construct expresses frataxin followed by
nonsense, or nothing fluorescent at all. Both junctions were therefore checked explicitly in
SnapGene.

<img src="/images/courseworks/genetics/fxn-gfp-start-junction.jpg" alt="The forward primer clamp and XhoI site at the frataxin start codon" loading="lazy" width="100%">

*Start of the fusion: the forward primer's GGG clamp and XhoI site at the frataxin start codon.*

<img src="/images/courseworks/genetics/fxn-gfp-end-junction.png" alt="The frataxin to AcGFP1 junction with GFP in frame" loading="lazy" width="100%">

*The frataxin to AcGFP1 junction: the PstI site and reverse primer, with GFP in frame.*

## The cloning plan and the experiment

The full route was written as a flow diagram: PCR, digestion, dephosphorylation, ligation,
transformation, colony screening, and confirmation by NheI and BamHI digestion followed by
sequencing.

The biological experiment: electroporate the plasmid into HeLa cells, select with G418, then
image frataxin-GFP by fluorescence microscopy at roughly 475 nm excitation and 505 nm emission.
Frataxin is expected to localise to mitochondria.

These plasmid maps are designs made in SnapGene rather than constructs that were built and
verified.
