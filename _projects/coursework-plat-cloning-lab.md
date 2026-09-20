---
title: "Restriction Cloning of His-tagged tPA into pASK-IBA37plus, with Ligation Failure Diagnosis"
collection: projects
category: genetics
type: "Project"
permalink: /projects/coursework-plat-cloning-lab
date: 2022-03-29
pdfurl: "/files/cw/genetics-lab-report.pdf"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/courseworks/genetics/restriction-digest-gel.jpg' style='width:49%;height:auto;'><img src='/images/courseworks/genetics/paskplat-plasmid-map.png' style='width:49%;height:auto;'></div> \n \n A lab report in which the cloning did not work, and the useful part was establishing which step failed: the ligation, not the transformation."
---

Move the human PLAT gene (tissue plasminogen activator, in its truncated reteplase form) from
pOTB7PLAT into the expression vector pASK-IBA37plus, and express it with an N-terminal His tag.

Techniques: restriction mapping, PCR with primers carrying BamHI and HindIII sites, agarose gel
electrophoresis, restriction cloning and ligation, transformation of competent *E. coli*, colony
screening, Sanger sequence analysis, tetracycline-induced expression, and SDS-PAGE with Coomassie
and a His-tag in-gel stain.

## Restriction mapping

pOTB7PLAT (4,345 bp) was confirmed by digestion against predicted fragment sizes: EcoRI
predicted 472, 803 and 3,070 bp against roughly 475, 850 and 3,210 observed; EcoRI with PstI
predicted 472, 803, 1,275 and 1,795 against roughly 500, 845, 1,340 and 1,915.

<img src="/images/courseworks/genetics/restriction-digest-gel.jpg" alt="Agarose gel of pOTB7PLAT digests" loading="lazy" width="100%">

*Agarose gel checking pOTB7PLAT: ladder (1), uncut plasmid (2), EcoRI (3), PstI (4), and EcoRI with PstI (5). Observed fragments match the predicted map, so the starting plasmid is what it is supposed to be.*

PCR of the insert gave the expected band of about 1.1 kb, in one of two reactions.

## The construct


<img src="/images/courseworks/genetics/paskplat-plasmid-map.png" alt="SnapGene map of the pASKPLAT expression construct" loading="lazy" width="100%">

*The intended pASKPLAT construct (4,293 bp) in SnapGene: the PLAT reteplase insert with an N-terminal 6xHis tag under the tet promoter, between BamHI and HindIII. A design, not a verified clone.*

## What went wrong, and how that was established

**The cloning did not work.** Insert plus vector gave an average of 356 colonies per plate,
*fewer* than the vector-only control at 524, and colony digests showed no insert band.

The useful part of the practical was isolating which step failed. The plasmid control returned
8.8 x 10^6 transformants per microgram, so the cells were demonstrably competent and the
transformation was fine. That leaves the ligation. Running the controls is what converts "it did
not work" into a specific diagnosis, and it is the reason a negative result is still a result.

A separately supplied pASKPLAT sequencing read did show the His tag in frame with the PLAT open
reading frame, with no premature stop codons across the read.

Induced expression was assessed by SDS-PAGE with a His-tag stain, but that gel was shared with a
neighbouring pair and the report is inconsistent about which lanes belong to which pair, so no
claim is made from it here.

## Written-up next steps

Nickel affinity purification with imidazole steps, followed by ion exchange and size exclusion
to above 99% purity, then clot-lysis assays in vitro and a mouse stroke model.
