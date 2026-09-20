---
title: "RepeatMasker, BLAST and Ab Initio Gene Prediction on an Unknown Fungal Contig"
collection: projects
category: genetics
type: "Project"
permalink: /projects/genome-annotation-fungal-contig
date: 2023-11-27
pdfurl: "/files/cw/genome-annotation.pdf"
excerpt: "<div style=\"display:flex;gap:2%;flex-wrap:wrap;align-items:flex-start;\"><img src='/images/postgrad-courseworks/genome-annotation/fgenesh-gene-models.png' style='width:49%;height:auto;'><img src='/images/postgrad-courseworks/genome-annotation/blastn-distance-tree.png' style='width:49%;height:auto;'></div> \n \n Identifying a 13.8 kbp unknown fungal sequence, showing that its closest BLAST match was an artefact of unmasked repeats, and combining two gene predictors with BLASTx evidence into a putative gene model."
---

An unknown **13.84 kbp fungal contig**, with the task of finding its repeats, identifying the
organism, predicting its genes with two independent programs, and combining the evidence into a
putative gene model.

## Repeats first, and why the order matters

RepeatMasker found 3 LINEs and 2 LTR elements covering **7.97%** of the sequence, plus 21
unclassified repeat families covering a further **35.13%**. Close to half the contig is
repetitive.

That is not a side observation, it changes the answer. BLASTn on the raw sequence placed every
significant hit in *Blumeria graminis*, powdery mildew, with the single closest identity match to
the *hordei* forma specialis. Re-running BLASTn on the **repeat-masked** sequence, roughly
7,500 nt of the original 13,800, removed the *hordei* hits entirely and left one *tritici* genome
assembly alignment covering **90% of the sequence at 92% identity**.

The *hordei* match was repeat-biased: shared transposable elements rather than shared ancestry at
this locus. Masking before searching is the difference between the right answer and a confident
wrong one.

<img src="/images/postgrad-courseworks/genome-annotation/blastn-distance-tree.png" alt="BLASTn distance tree placing the query among Blumeria graminis assemblies" loading="lazy" width="100%">

*Annotated BLASTn output: the query sits among *Blumeria graminis* genome assemblies, closest to the *hordei* forma specialis before masking. After masking, that proximity disappears.*

<img src="/images/postgrad-courseworks/genome-annotation/blastx-protein-hits.png" alt="Distribution of the top BLASTx hits along the sequence" loading="lazy" width="100%">

*Annotated BLASTx output: where the 132 top hits fall along the contig, labelled with the four proteins they point to and their reading frames. Within the genus, *hordei* scored highest but on far fewer alignments, and the *tritici* equivalents were mostly annotated as hypothetical proteins.*

## Two gene predictors, and why they disagree

**AUGUSTUS** has no *Blumeria* training set, so it was run with the closest available species on
its fungal tree, *Botrytis cinerea*. It predicted 4 genes, 7 transcripts and 32 exons.

**FGENESH** does have *B. graminis* parameters, and predicted 5 genes and 13 protein-coding
exons.

<img src="/images/postgrad-courseworks/genome-annotation/augustus-gene-predictions.png" alt="AUGUSTUS gene predictions annotated with reading frames and exon counts" loading="lazy" width="100%">

*Annotated AUGUSTUS output in the genome browser, labelled with each prediction's reading frame and exon count. Trained on a related species rather than this one, it fragments the sequence into many more exons and alternative transcripts.*

<img src="/images/postgrad-courseworks/genome-annotation/fgenesh-gene-models.png" alt="The five gene models FGENESH predicted, with exon structures" loading="lazy" width="100%">

*FGENESH output: five genes with their exon structures, coding strand and exon counts. One transcript per gene, and open reading frames that line up with the BLASTx alignments.*

FGENESH was the better predictor here, for a reason worth stating plainly: species-specific
parameters. Ab initio prediction learns what a gene looks like in a particular genome, so a model
trained on the right organism beats a more general one, and 32 exons across 7 transcripts is the
signature of a model guessing at splice sites it was never taught.

## The putative gene model

Combining the predictions with BLASTx evidence, and excluding anything falling inside a repeat,
gave three features with E-values near zero and over 90% identity: two hypothetical proteins
(BGT96224_2407 and BGT96224_457, the latter matching glutamate decarboxylase in *hordei*) and a
heat shock protein 70 family protein.

This is a coursework conclusion on a set sequence, so the model is putative rather than a
validated annotation.
